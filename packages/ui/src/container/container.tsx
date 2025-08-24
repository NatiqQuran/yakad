import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./container.module.css";
import boxingStyles from "../boxing.module.css";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    children?: React.ReactNode;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ size = "xl", align, className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            boxingStyles.flexColumnBox,
            { [boxingStyles[align as string]]: align },
            styles.container,
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
