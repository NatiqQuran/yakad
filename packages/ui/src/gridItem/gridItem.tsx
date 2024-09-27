import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./gridItem.module.css";

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

// Custom Button Element
export default function GridItem(props: GridItemProps) {
    const joinedClassNames = joinClassNames(
        props.xl ? styles["xl" + props.xl] : "",
        props.lg ? styles["lg" + props.lg] : "",
        props.md ? styles["md" + props.md] : "",
        props.sm ? styles["sm" + props.sm] : "",
        props.xs ? styles["xs" + props.xs] : "",
        props.className!
    );

    return (
        <div {...props} className={joinedClassNames}>
            {props.children as React.ReactNode}
        </div>
    );
}
