import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./svgIcon.module.css";

export interface SvgIconProps extends React.HTMLAttributes<HTMLElement> {
    size?: number;
}

export default function SvgIcon(props: SvgIconProps) {
    const joinedClassNames = joinClassNames(styles.svg, props.className!);

    const joinedStyles = joinStyles(
        props.size
            ? { width: props.size + "rem", height: props.size + "rem" }
            : {},
        props.style!
    );

    return (
        <div {...props} className={joinedClassNames} style={joinedStyles}>
            {props.children}
        </div>
    );
}
