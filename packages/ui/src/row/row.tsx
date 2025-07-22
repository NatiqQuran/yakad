import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./row.module.css";

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    overflow?: "shrink" | "wrap" | "scroll";
    children?: React.ReactNode;
}

export const Row = forwardRef<HTMLDivElement, RowProps>(
    (
        {
            align,
            size = "xl",
            overflow = "shrink",
            className,
            children,
            ...restProps
        },
        ref
    ) => {
        const joinedClassNames = classNames(
            styles.row,
            { [styles[align as string]]: align },
            styles[size],
            styles[overflow],
            className
        );

        return (
            <div ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </div>
        );
    }
);
