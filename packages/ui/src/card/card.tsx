import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./card.module.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ align = "start", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.card,
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

export default Card;
