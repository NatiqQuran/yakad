import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./card.module.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    blur?: boolean;
    children?: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ align, blur, className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.card,
            { [styles[align as string]]: align },
            { [styles.blur]: blur },
            className
        );

        return (
            <div ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </div>
        );
    }
);
