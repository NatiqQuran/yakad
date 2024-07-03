import React, { PropsWithChildren } from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./Xbackground.module.css";

interface XbackgroundProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "dotted" | "strips";
    separator?: "shadowinside" | "shadowoutside";
<<<<<<< HEAD
    backgroundImage?: any;
    backgroundFixed?: boolean;
=======
    backgroundfixed?: boolean;
    backgroundimage?: any;
>>>>>>> e1f27b3 (fix Xbackground image url bug)
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
<<<<<<< HEAD
        props.backgroundImage
            ? { backgroundImage: `url(${props.backgroundImage.src})` }
=======
        props.backgroundimage
            ? { backgroundImage: `url(${props.backgroundimage.src})` }
>>>>>>> e1f27b3 (fix Xbackground image url bug)
            : {},
        props.style!
    );

    return (
        <div style={joinedStyles} className={joinedClassNames}>
            {props.children as React.ReactNode}
        </div>
    );
}
