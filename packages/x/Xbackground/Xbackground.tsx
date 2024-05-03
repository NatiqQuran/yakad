import React, { PropsWithChildren } from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./Xbackground.module.css";
interface XbackgroundProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "dotted" | "strips";
    separator?: "shadowinside" | "shadowoutside";
    backgroundfixed?: boolean;
    backgroundimage?: string;
}

export default function Xbackground(props: XbackgroundProps) {
    const joinedClassNames = joinClassNames(
        styles.background,
        props.variant ? styles[props.variant] : "",
        props.backgroundfixed ? styles.fixed : "",
        props.backgroundimage ? styles.image : "",
        props.separator ? styles[props.separator] : "",
        props.className!
    );
    const joinedStyles = joinStyles(
        props.backgroundimage
            ? { backgroundImage: `url(${props.backgroundimage})` }
            : {},
        props.style!
    );

    return (
        <div style={joinedStyles} className={joinedClassNames}>
            {props.children as any}
        </div>
    );
}
