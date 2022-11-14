import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./gridItem.module.css";

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

// Custom Button Element
function GridItem(props: GridItemProps) {
    const joinedClassNames = joinClassNames(
        props.xl ? styles["xl" + props.xl] : "",
        props.lg ? styles["lg" + props.lg] : "",
        props.md ? styles["md" + props.md] : "",
        props.md ? styles["sm" + props.md] : "",
        props.md ? styles["xs" + props.md] : "",
        props.className!
    );

    return (
        <div {...props} className={joinedClassNames}>
            {props.children}
        </div>
    );
}

export default GridItem;
