import { forwardRef, useEffect } from "react";
import classNames from "classnames";

import "./globals.css";
import styles from "./theme.module.css";

export type DarkStyle = "light" | "dark" | "system";
export type ThemeColor = "green" | "red" | "yellow" | "blue" | "purple";
export interface ThemeProps extends React.HTMLAttributes<HTMLDivElement> {
    darkstyle?: DarkStyle;
    color?: ThemeColor;
    zoom?: number; //Percentage zoom level (e.g., 100 for 100%)
    children?: React.ReactNode;
}

export const Theme = forwardRef<HTMLDivElement, ThemeProps>(
    (
        {
            darkstyle = "system",
            color = "blue",
            zoom = 100,
            className,
            children,
            ...restProps
        },
        ref
    ) => {
        const zoomPercentage = zoom ? (zoom / 100) * 62.5 : 62.5;

        useEffect(() => {
            document.documentElement.style.setProperty(
                "font-size",
                zoomPercentage + "%"
            );
        }, [zoomPercentage]);

        const joinedClassNames = classNames(
            styles.theme,
            styles[darkstyle],
            styles[color],
            className
        );

        return (
            <div ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </div>
        );
    }
);
