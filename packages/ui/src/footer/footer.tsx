import { forwardRef, useState, useEffect } from "react";
import classNames from "classnames";

import styles from "./footer.module.css";
import boxingStyles from "../boxing.module.css";

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    overflow?: "shrink" | "wrap" | "scroll";
    position?: "initial" | "sticky" | "scroll";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    blur?: boolean;
    children?: React.ReactNode;
}

export const Footer = forwardRef<HTMLDivElement, FooterProps>(
    (
        {
            align,
            overflow = "shrink",
            position = "initial",
            size,
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
            boxingStyles.flexRowBox,
            { [boxingStyles[align as string]]: align },
            boxingStyles[overflow],
            styles.footer,
            { [styles.sticky]: position === "sticky" || position === "scroll" },
            { [styles.hidden]: position === "scroll" && !show },
            { [styles[size as string]]: size },
            { [styles.blur]: blur },
            className
        );

        return (
            <footer ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </footer>
        );
    }
);
