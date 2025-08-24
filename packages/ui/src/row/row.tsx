import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./row.module.css";
import boxingStyles from "../boxing.module.css";

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    overflow?: "shrink" | "wrap" | "scroll";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    children?: React.ReactNode;
}

export const Row = forwardRef<HTMLDivElement, RowProps>(
    (
        {
            align,
            overflow = "shrink",
            size = "xl",
            className,
            children,
            ...restProps
        },
        ref
    ) => {
        const joinedClassNames = classNames(
            boxingStyles.flexRowBox,
            { [boxingStyles[align as string]]: align },
            boxingStyles[overflow],
            styles.row,
            overflow === "shrink" && "fullWidthLover",
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
