import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./row.module.css";

export default function Row(props: React.HTMLAttributes<HTMLDivElement>) {
    const joinedClassNames = joinClassNames(styles.row, props.className!);

    return (
        <div {...props} className={joinedClassNames}>
            {props.children as any}
        </div>
    );
}
