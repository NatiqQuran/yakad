import React, { forwardRef, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./appBar.module.css";

export interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {
    sticky?: boolean;
    autohide?: boolean;
    blur?: boolean;
    children?: React.ReactNode;
}

export const AppBar = forwardRef<HTMLDivElement, AppBarProps>(
    ({ sticky, autohide, blur, className, children, ...restProps }, ref) => {
        const [show, setShow] = useState(true);
        const [lastScrollY, setLastScrollY] = useState(0);

        useEffect(() => {
            if (!autohide) return;

            const handleScroll = () => {
                const currentScrollY = window.scrollY;

                if (currentScrollY > lastScrollY && currentScrollY > 50) {
                    // Scroll down
                    setShow(false);
                } else {
                    // Scroll up
                    setShow(true);
                }

                setLastScrollY(currentScrollY);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, [lastScrollY, autohide]);

        const joinedClassNames = classNames(
            styles.header,
            {
                [styles.sticky]: sticky,
                [styles.blur]: blur,
                [styles.hidden]: autohide && !show,
            },
            className
        );

        return (
            <header ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </header>
        );
    }
);
