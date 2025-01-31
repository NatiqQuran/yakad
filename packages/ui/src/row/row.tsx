import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./row.module.css";

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    overflow?: "shrink" | "wrap" | "scroll";
    children?: React.ReactNode;
}

const Row = forwardRef<HTMLDivElement, RowProps>(
    (
        { align, overflow = "shrink", className, children, ...restProps },
        ref
    ) => {
        const joinedClassNames = classNames(
            styles.row,
            { [styles[align as string]]: align },
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

export default Row;
