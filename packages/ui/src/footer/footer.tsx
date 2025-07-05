import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./footer.module.css";

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    sticky?: boolean;
    blur?: boolean;
    children?: React.ReactNode;
}

export const Footer = forwardRef<HTMLDivElement, FooterProps>(
    ({ align, sticky, blur, className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.footer,
            { [styles[align as string]]: align },
            { [styles.sticky]: sticky },
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
