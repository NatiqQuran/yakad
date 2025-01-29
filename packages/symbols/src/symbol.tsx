import React, { forwardRef } from "react";
import classNames from "classnames";

import { IconCode } from "./types";
import styles from "./public/css/style.module.css";

interface SymbolProps extends React.HTMLAttributes<HTMLElement> {
    icon: IconCode;
    type?: "default" | "outlined" | "round" | "sharp" | "twoTone";
    size?: number | "small" | "medium" | "large";
    mirror?: "horizontal" | "vertical" | "diagonal";
}

interface SymbolSizeMap {
    small: number;
    medium: number;
    large: number;
}
const symbolSizeMaps: SymbolSizeMap = {
    small: 2,
    medium: 2.4,
    large: 3.2,
};

const Symbol = forwardRef<HTMLSpanElement, SymbolProps>(
    (
        {
            icon,
            type = "default",
            size = 2.4,
            mirror,
            className,
            style,
            children,
            ...restProps
        },
        ref
    ) => {
        const joinedClassNames = classNames(
            styles.materialIcons,
            styles[type],
            { [styles[mirror + "Mirror"]]: mirror },
            className
        );

        const sizeValue: string =
            (typeof size === "number" ? size : symbolSizeMaps[size]) + "rem";

        const joinedStyles = {
            ...style,
            width: sizeValue,
            height: sizeValue,
            fontSize: sizeValue,
            lineHeight: sizeValue,
        };

        return (
            <span
                {...restProps}
                className={joinedClassNames}
                style={joinedStyles}
            >
                {icon}
            </span>
        );
    }
);

export default Symbol;
