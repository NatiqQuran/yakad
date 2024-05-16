import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./row.module.css";

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
}

export default function Row(props: RowProps) {
    const joinedClassNames = joinClassNames(
        styles.row,
        props.align ? styles[props.align] : styles.start,
        props.className!
    );

    return (
        <div {...props} className={joinedClassNames}>
            {props.children as React.ReactNode}
        </div>
    );
}
