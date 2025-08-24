import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./display.module.css";

export interface DisplayProps extends React.HTMLAttributes<HTMLElement> {
    minWidth?: "xs" | "sm" | "md" | "lg" | "xl";
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
    children?: React.ReactNode;
}

export const Display = forwardRef<HTMLDivElement, DisplayProps>(
    ({ minWidth, maxWidth, className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            "fullWidthLover",
            { [styles[`${minWidth}MinWidth`]]: minWidth },
            { [styles[`${maxWidth}MaxWidth`]]: maxWidth },
            className
        );

        return (
            <div ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </div>
        );
    }
);
