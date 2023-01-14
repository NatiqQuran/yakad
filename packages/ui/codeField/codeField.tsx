import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./codeField.module.css";

interface CodeFieldsProps extends React.HTMLAttributes<HTMLInputElement> {
    length?: number;
    name?: string;
    type?: string;
}

function CodeField(props: CodeFieldsProps) {
    const joinedClassNames = joinClassNames(styles.input, props.className!);

    const joinedStyles = joinStyles(
        { width: "calc(1.5ch * " + props.length + ")" },
        props.style!
    );

    return (
        <input
            {...props}
            name={props.name}
            type={props.type}
            minLength={props.length}
            maxLength={props.length}
            className={joinedClassNames}
            style={joinedStyles}
        />
    );
}

export default CodeField;
