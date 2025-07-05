import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./navigation.module.css";

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
    anchor?: "left" | "right" | "top" | "bottom" | "auto";
    open: boolean;
    children?: React.ReactNode;
}

export const Navigation = forwardRef<HTMLDivElement, NavigationProps>(
    (
        { anchor = "auto", open = false, className, children, ...restProps },
        ref
    ) => {
        const joinedClassNames = classNames(styles.navigation, styles[anchor], {
            [styles.open]: open,
        });

        return (
            <nav ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </nav>
        );
    }
);
