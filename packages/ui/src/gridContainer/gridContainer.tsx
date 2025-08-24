import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./gridContainer.module.css";

export interface GridContainerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    gap?: number;
    columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    children?: React.ReactNode;
}

export const GridContainer = forwardRef<HTMLDivElement, GridContainerProps>(
    (
        { gap = 1.5, columns = 12, className, style, children, ...restProps },
        ref
    ) => {
        const joinedClassNames = classNames(
            styles.gridcontainer,
            styles[`gridColumns${columns}`],
            className
        );
        const joinedStyles = {
            ...style,
            columnGap: style?.columnGap || `${gap}rem`,
            rowGap: style?.rowGap || `${gap}rem`,
        };

        return (
            <div
                ref={ref}
                {...restProps}
                className={joinedClassNames}
                style={joinedStyles}
            >
                {children}
            </div>
        );
    }
);
