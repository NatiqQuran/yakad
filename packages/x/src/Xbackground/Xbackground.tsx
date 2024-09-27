import React, { PropsWithChildren } from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./Xbackground.module.css";

interface XbackgroundProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "dotted" | "strips";
    separator?: "shadowinside" | "shadowoutside";
    backgroundImage?: any;
    backgroundFixed?: boolean;
}

export default function Xbackground(props: XbackgroundProps) {
    const joinedClassNames = joinClassNames(
        styles.background,
        props.variant ? styles[props.variant] : "",
        props.backgroundFixed ? styles.fixed : "",
        props.backgroundImage ? styles.image : "",
        props.separator ? styles[props.separator] : "",
        props.className!
    );
    const joinedStyles = joinStyles(
        props.backgroundImage
            ? { backgroundImage: `url(${props.backgroundImage.src})` }
            : {},
        props.style!
    );

    return (
        <div style={joinedStyles} className={joinedClassNames}>
            {props.children as React.ReactNode}
        </div>
    );
}
