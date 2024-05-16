import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./card.module.css";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
}

export default function Card(props: CardProps) {
    const joinedClassNames = joinClassNames(
        styles.card,
        props.align ? styles[props.align] : styles.start,
        props.className!
    );

    return (
        <div {...props} className={joinedClassNames}>
            {props.children as React.ReactNode}
        </div>
    );
}
