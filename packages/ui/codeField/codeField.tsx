import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./codeField.module.css";

interface CodeFieldsProps extends React.HTMLAttributes<HTMLElement> {
    length?: number;
}

function CodeField(props: CodeFieldsProps) {
    const joinedClassNames = joinClassNames(styles.input, props.className!);

    const joinedStyles = joinStyles(
        { width: "calc(1.5ch * " + props.length + ")" },
        props.style!
    );

    return (
        <input
            minLength={props.length}
            maxLength={props.length}
            className={joinedClassNames}
            style={joinedStyles}
        />
    );
}

export default CodeField;
