import { forwardRef, useEffect, useState } from "react";
import classNames from "classnames";

import styles from "./appBar.module.css";

export interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: "initial" | "sticky" | "scroll";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    align?: "start" | "center" | "end";
    blur?: boolean;
    children?: React.ReactNode;
}

export const AppBar = forwardRef<HTMLDivElement, AppBarProps>(
    (
        {
            position = "initial",
            size,
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
            if (position !== "scroll") return;

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
                [styles.sticky]: position === "sticky" || position === "scroll",
            },
            { [styles.hidden]: position === "scroll" && !show },
            { [styles[size as string]]: size },
            { [styles[align as string]]: align },
            { [styles.blur]: blur },
            className
        );

        return (
            <header ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </header>
        );
    }
);
