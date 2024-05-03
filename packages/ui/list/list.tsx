import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./list.module.css";

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
    direction?: "row" | "column";
    collapsed?: boolean;
}

export default function List(props: ListProps) {
    const joinedClassNames = joinClassNames(
        styles.list,
        props.direction ? styles[props.direction] : styles.row,
        props.collapsed ? styles.collapsed : "",
        props.className!
    );

    return (
        <ul {...props} className={joinedClassNames}>
            {props.children as any}
        </ul>
    );
}
