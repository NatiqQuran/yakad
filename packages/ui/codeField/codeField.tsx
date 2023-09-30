import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./codeField.module.css";

interface CodeFieldsProps extends React.HTMLAttributes<HTMLInputElement> {
    length?: number;
    name?: string;
    type?: string;
    autoFocus?: boolean;
}

function sliceOverLength(
    event: React.FormEvent<HTMLInputElement>,
    length: number
) {
    const targetInput = event.target as HTMLInputElement;
    const targetLength = targetInput.value.length;
    if (targetLength > length)
        targetInput.value = targetInput.value.slice(0, targetLength - 1);

    targetInput.value = targetInput.value.replace(/[^0-9]+/, "");
}

export default function CodeField(this: any, props: CodeFieldsProps) {
    const length: number = props.length ? props.length : 6;

    const joinedClassNames = joinClassNames(styles.input, props.className!);

    const joinedStyles = joinStyles(
        { width: "calc(1.5ch * " + props.length + ")" },
        props.style!
    );

    return (
        <input
            name={props.name}
            type="number"
            minLength={length}
            maxLength={length}
            className={joinedClassNames}
            style={joinedStyles}
            onInput={(event) => sliceOverLength(event, length)}
            autoComplete="off"
            pattern="[0-9]"
            autoFocus={props.autoFocus}
        />
    );
}
