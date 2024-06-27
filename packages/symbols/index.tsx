import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import { iconsCode } from "./iconsCode";
import styles from "./style.module.css";

interface SymbolProps extends React.HTMLAttributes<HTMLElement> {
    icon: iconsCode;
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

export default function Symbol(props: SymbolProps) {
    const joinedClassNames = joinClassNames(
        styles.materialIcons,
        props.type ? styles[props.type] : styles.default,
        props.mirror ? styles[props.mirror + "Mirror"] : null,
        props.className!
    );

    const size =
        (props.size
            ? typeof props.size === "number"
                ? props.size
                : symbolSizeMaps[props.size]
            : 2.4) + "rem";

    const joinedStyles = joinStyles(
        { width: size, height: size, fontSize: size, lineHeight: size },
        props.style!
    );

    return (
        <span {...props} className={joinedClassNames} style={joinedStyles}>
            {props.icon}
        </span>
    );
}
