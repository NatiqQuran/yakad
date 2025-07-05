import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./footer.module.css";

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    children?: React.ReactNode;
}

export const Footer = forwardRef<HTMLDivElement, FooterProps>(
    ({ align, className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.footer,
            { [styles[align as string]]: align },
            className
        );

        return (
            <footer ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </footer>
        );
    }
);
