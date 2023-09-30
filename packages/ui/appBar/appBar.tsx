import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./appBar.module.css";

export default function AppBar(props: React.HTMLAttributes<HTMLElement>) {
    const joinedClassNames = joinClassNames(styles.header, props.className!);

    return (
        <header {...props} className={joinedClassNames}>
            {props.children}
        </header>
    );
}
