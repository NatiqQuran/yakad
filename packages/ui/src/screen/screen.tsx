import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./screen.module.css";

export interface ScreenProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    children?: React.ReactNode;
}

const Screen = forwardRef<HTMLDivElement, ScreenProps>(
    ({ align, className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.screen,
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

export default Screen;
