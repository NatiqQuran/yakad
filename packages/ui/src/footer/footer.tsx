import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./footer.module.css";

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
}

const Footer = forwardRef<HTMLDivElement, FooterProps>(
    ({ align = "start", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.footer,
            styles[align],
            className
        );

        return (
            <footer ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </footer>
        );
    }
);

export default Footer;
