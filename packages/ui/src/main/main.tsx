import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./main.module.css";
import boxingStyles from "../boxing.module.css";

export interface MainProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    navopen?: boolean;
    children?: React.ReactNode;
}

export const Main = forwardRef<HTMLDivElement, MainProps>(
    ({ align, navopen = false, className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            boxingStyles.flexColumnBox,
            { [boxingStyles[align as string]]: align },
            styles.main,
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
