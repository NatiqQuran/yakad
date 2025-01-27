import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./appBar.module.css";

export interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {
    sticky?: boolean;
    children?: React.ReactNode;
}

const AppBar = forwardRef<HTMLDivElement, AppBarProps>(
    ({ sticky, className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.header,
            { [styles.sticky]: sticky },
            className
        );

        return (
            <header ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </header>
        );
    }
);

export default AppBar;
