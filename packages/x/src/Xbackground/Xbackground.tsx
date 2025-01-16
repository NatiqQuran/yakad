import React, { PropsWithChildren } from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./Xbackground.module.css";

interface XbackgroundProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "dotted" | "strips";
    separator?: "shadowinside" | "shadowoutside";
    image?: any;
    fixed?: boolean;
}

export default function Xbackground(props: XbackgroundProps) {
    const joinedClassNames = joinClassNames(
        styles.background,
        props.variant ? styles[props.variant] : "",
        props.fixed ? styles.fixed : "",
        props.image ? styles.image : "",
        props.separator ? styles[props.separator] : "",
        props.className!
    );
    const joinedStyles = joinStyles(
        props.image ? { backgroundImage: `url(${props.image.src})` } : {},
        props.style!
    );

    return (
        <div style={joinedStyles} className={joinedClassNames}>
            {props.children as React.ReactNode}
        </div>
    );
}
