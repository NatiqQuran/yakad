import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./container.module.css";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    children?: React.ReactNode;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ align, size = "xl", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.container,
            { [styles[align as string]]: align },
            styles[size],
            className
        );

        return (
            <div ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </div>
        );
    }
);
