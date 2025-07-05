import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./gridItem.module.css";

type GridColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    xs?: GridColumn;
    sm?: GridColumn;
    md?: GridColumn;
    lg?: GridColumn;
    xl?: GridColumn;
    children?: React.ReactNode;
}

export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
    ({ xs, sm, md, lg, xl, className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            { [styles[`xs${xs}`]]: xs },
            { [styles[`sm${sm}`]]: sm },
            { [styles[`md${md}`]]: md },
            { [styles[`lg${lg}`]]: lg },
            { [styles[`xl${xl}`]]: xl },
            className
        );

        return (
            <div ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </div>
        );
    }
);
