import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./footer.module.css";

export default function Footer(props: React.HTMLAttributes<HTMLElement>) {
    const joinedClassNames = joinClassNames(styles.footer, props.className!);

    return (
        <footer {...props} className={joinedClassNames}>
            {props.children as any}
        </footer>
    );
}
