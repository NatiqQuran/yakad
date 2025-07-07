import React, { forwardRef, useEffect, useState } from "react";
import classNames from "classnames";

import styles from "./appBar.module.css";

export interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: "initial" | "sticky" | "autohide";
    align?: "start" | "center" | "end";
    blur?: boolean;
    children?: React.ReactNode;
}

export const AppBar = forwardRef<HTMLDivElement, AppBarProps>(
    (
        {
            position = "initial",
            align,
            blur,
            className,
            children,
            ...restProps
        },
        ref
    ) => {
        const [show, setShow] = useState(true);
        const [lastScrollY, setLastScrollY] = useState(0);

        useEffect(() => {
            if (position !== "autohide") return;

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
        }, [lastScrollY, position]);

        const joinedClassNames = classNames(
            styles.header,
            {
                [styles.sticky]:
                    position === "sticky" || position === "autohide",
                [styles.hidden]: position === "autohide" && !show,
                [styles[align as string]]: align,
                [styles.blur]: blur,
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
