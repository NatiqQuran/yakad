import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./gridContainer.module.css";

export interface GridContainerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    gap?: number;
    columns?: 10 | 12;
}

const GridContainer = forwardRef<HTMLDivElement, GridContainerProps>(
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
            columnGap: style?.columnGap && `${gap}rem`,
            rowGap: style?.rowGap && `${gap}rem`,
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

export default GridContainer;
