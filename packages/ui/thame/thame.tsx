import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./thame.module.css";

interface ThameProps extends React.HTMLAttributes<HTMLElement> {
    mode?: "light" | "dark" | "system";
    color?: "green" | "pink" | "grow" | "blue";
}

function Thame(props: ThameProps) {
    const joinedClassNames = joinClassNames(
        styles.blue,
        props.mode ? styles[props.mode] : styles.blue,
        props.color ? styles[props.color] : styles.blue,
        props.className!
    );
    return <div className={joinedClassNames}>{props.children}</div>;
}

export default Thame;
