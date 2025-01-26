import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./main.module.css";

export interface MainProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    navopen?: boolean;
}

const Main = forwardRef<HTMLDivElement, MainProps>(
    (
        { align = "start", navopen = false, className, children, ...restProps },
        ref
    ) => {
        const joinedClassNames = classNames(
            styles.main,
            styles[align],
            { [styles.navOpen]: navopen },
            className
        );

        return (
            <main ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </main>
        );
    }
);

export default Main;
