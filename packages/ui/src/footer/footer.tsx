import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./footer.module.css";

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    position?: "initial" | "sticky";
    blur?: boolean;
    children?: React.ReactNode;
}

export const Footer = forwardRef<HTMLDivElement, FooterProps>(
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
        const joinedClassNames = classNames(
            styles.footer,
            { [styles.sticky]: position === "sticky" },
            { [styles[align as string]]: align },
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
