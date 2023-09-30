import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./card.module.css";

export default function Card(props: React.HTMLAttributes<HTMLElement>) {
    const joinedClassNames = joinClassNames(styles.card, props.className!);

    return (
        <div {...props} className={joinedClassNames}>
            {props.children}
        </div>
    );
}
