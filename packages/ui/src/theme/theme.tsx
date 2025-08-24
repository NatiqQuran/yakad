import { forwardRef, useEffect } from "react";
import classNames from "classnames";

import "./globals.css";
import styles from "./theme.module.css";
import boxingStyles from "../boxing.module.css";

export type DarkStyle = "light" | "dark" | "system";
export type ThemeColor = "green" | "red" | "yellow" | "blue" | "purple";
export interface ThemeProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    darkstyle?: DarkStyle;
    color?: ThemeColor;
    zoom?: number; //Percentage zoom level (e.g., 100 for 100%)
    children?: React.ReactNode;
}

export const Theme = forwardRef<HTMLDivElement, ThemeProps>(
    (
        {
            align,
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
            boxingStyles.flexColumnBox,
            { [boxingStyles[align as string]]: align },
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
