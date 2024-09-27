import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./container.module.css";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

export default function Container(props: ContainerProps) {
    const joinedClassNames = joinClassNames(
        styles.container,
        props.align ? styles[props.align] : styles.start,
        props.maxWidth ? styles[props.maxWidth] : "",
        props.className!
    );

    return (
        <div {...props} className={joinedClassNames}>
            {props.children as React.ReactNode}
        </div>
    );
}
