import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./footer.module.css";

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
}

export default function Footer(props: FooterProps) {
    const joinedClassNames = joinClassNames(
        styles.footer,
        props.align ? styles[props.align] : styles.start,
        props.className!
    );

    return (
        <footer {...props} className={joinedClassNames}>
            {props.children as React.ReactNode}
        </footer>
    );
}
