import React, { forwardRef } from "react";
import classNames from "classnames";

import "./globals.css";
import styles from "./theme.module.css";

export interface ThemeProps extends React.HTMLAttributes<HTMLDivElement> {
    mode?: "light" | "dark" | "system";
    color?: "green" | "red" | "yellow" | "blue" | "purple";
    zoom?: number;
    children?: React.ReactNode;
}

const Theme = forwardRef<HTMLDivElement, ThemeProps>(
    (
        {
            mode = "system",
            color = "blue",
            zoom,
            className,
            children,
            ...restProps
        },
        ref
    ) => {
        const zoomPercentage = zoom ? (zoom / 100) * 62.5 : 62.5;
        //   document.documentElement.style.setProperty("font-size", zoomPercentage + "%");

        const joinedClassNames = classNames(
            styles[mode],
            styles[color],
            styles.theme,
            className
        );

        return (
            <div ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </div>
        );
    }
);

export default Theme;
