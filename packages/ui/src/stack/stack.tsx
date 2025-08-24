import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./stack.module.css";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    children?: React.ReactNode;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
    ({ align, className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            "allowFullWidth",
            styles.stack,
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
