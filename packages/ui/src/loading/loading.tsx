import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./loading.module.css";

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "extraSmall" | "small" | "medium" | "large" | "extraLarge";
    variant?: "scaleOut" | "dots" | "spinner";
}

export const Loading = forwardRef<HTMLDivElement, LoadingProps>(
    (
        { size = "medium", variant = "spinner", className, ...restProps },
        ref
    ) => {
        const joinedClassNames = classNames(
            styles.loading,
            styles[size],
            styles[variant],
            className
        );

        return (
            <div ref={ref} {...restProps} className={joinedClassNames}>
                <div></div>
            </div>
        );
    }
);
