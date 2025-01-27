import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./stack.module.css";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    children?: React.ReactNode;
}

const Stack = forwardRef<HTMLDivElement, StackProps>(
    ({ align = "start", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.stack,
            styles[align],
            className
        );

        return (
            <div ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </div>
        );
    }
);

export default Stack;
