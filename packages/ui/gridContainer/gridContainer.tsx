import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./gridContainer.module.css";

interface GridContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    rowGap?: number;
    columnGap?: number;
}

// Custom Button Element
export default function GridContainer(props: GridContainerProps) {
    const joinedClassNames = joinClassNames(
        styles.gridcontainer,
        props.className!
    );
    const joinedStyles = joinStyles(
        { columnGap: props.columnGap ? props.columnGap + "rem" : "1.5rem" },
        { rowGap: props.rowGap ? props.rowGap + "rem" : "1.5rem" },
        props.style!
    );
    return (
        <div {...props} className={joinedClassNames} style={joinedStyles}>
            {props.children}
        </div>
    );
}
