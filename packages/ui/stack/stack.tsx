import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./stack.module.css";

export default function Stack(props: React.HTMLAttributes<HTMLDivElement>) {
    const joinedClassNames = joinClassNames(styles.stack, props.className!);

    return (
        <div {...props} className={joinedClassNames}>
            {props.children}
        </div>
    );
}
