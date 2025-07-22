import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./container.module.css";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    align?: "start" | "center" | "end";
    children?: React.ReactNode;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ size = "xl", align, className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.container,
            styles[size],
            { [styles[align as string]]: align },
            className
        );

        return (
            <div ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </div>
        );
    }
);
