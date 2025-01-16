import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./appBar.module.css";

export interface AppbarProps extends React.HTMLAttributes<HTMLDivElement> {
    positionsticky?: boolean;
}

export default function AppBar(props: AppbarProps) {
    const joinedClassNames = joinClassNames(
        styles.header,
        props.positionsticky ? styles.sticky : "",
        props.className!
    );

    return (
        <header {...props} className={joinedClassNames}>
            {props.children as React.ReactNode}
        </header>
    );
}
