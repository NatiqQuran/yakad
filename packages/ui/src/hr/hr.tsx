import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./hr.module.css";

export interface HrProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "dotted" | "dashed" | "shortLine";
    height?: number;
    marginTopBottom?: number;
}

export default function Hr(props: HrProps) {
    const joinedClassNames = joinClassNames(
        styles.hr,
        props.variant ? styles[props.variant] : "",
        props.className!
    );

    const joinedStyles = joinStyles(
        props.height ? { borderTopWidth: props.height + "rem" } : {},
        props.marginTopBottom
            ? joinStyles(
                  { marginTop: props.marginTopBottom + "rem" },
                  { marginBottom: props.marginTopBottom + "rem" }
              )
            : {},
        props.style!
    );

    return (
        <hr {...props} className={joinedClassNames} style={joinedStyles}></hr>
    );
}
