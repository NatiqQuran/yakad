import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./container.module.css";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    children?: React.ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
    (
        { align = "start", size = "xl", className, children, ...restProps },
        ref
    ) => {
        const joinedClassNames = classNames(
            styles.container,
            styles[align],
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

export default Container;
