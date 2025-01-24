import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./page.module.css";

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
}

export default function Page(props: PageProps) {
    const joinedClassNames = joinClassNames(
        styles.page,
        props.align ? styles[props.align] : styles.start,
        props.className!
    );

    return (
        <div {...props} className={joinedClassNames}>
            {props.children as React.ReactNode}
        </div>
    );
}
