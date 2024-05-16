import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./container.module.css";

type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    maxWidth?: ScreenSize;
}

export default function Container(props: ContainerProps) {
    const joinedClassNames = joinClassNames(
        props.align ? styles[props.align] : styles.start,
        props.maxWidth ? styles[props.maxWidth] : "",
        styles.container,
        props.className!
    );

    return (
        <div {...props} className={joinedClassNames}>
            {props.children as React.ReactNode}
        </div>
    );
}
