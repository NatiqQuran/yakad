import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./stack.module.css";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
}

export default function Stack(props: StackProps) {
    const joinedClassNames = joinClassNames(
        styles.stack,
        props.align ? styles[props.align] : "",
        props.className!
    );

    return (
        <div {...props} className={joinedClassNames}>
            {props.children as React.ReactNode}
        </div>
    );
}
