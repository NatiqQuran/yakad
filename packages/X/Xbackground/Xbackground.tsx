import React, { PropsWithChildren } from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./Xbackground.module.css";
interface XbackgroundProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "dotted" | "strips";
    backgroundfixed?: boolean;
    backgroundimage?: string;
}

function Xbackground(props: XbackgroundProps) {
    const joinedClassNames = joinClassNames(
        styles.div,
        props.variant ? styles[props.variant] : "",
        props.backgroundfixed ? styles.fixed : "",
        props.backgroundimage ? styles.image : "",
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
            {props.children}
        </div>
    );
}

export default Xbackground;
