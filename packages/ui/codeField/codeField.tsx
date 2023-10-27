import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./codeField.module.css";

export interface CodeFieldsProps
    extends React.HTMLAttributes<HTMLInputElement> {
    length?: number;
    name?: string;
    type?: string;
    autoFocus?: boolean;
    onFilled?: Function;
}

function onInputHandler(
    event: React.FormEvent<HTMLInputElement>,
    inputLength: number,
    onFilled: Function | undefined
): void {
    const targetInputElement = event.target as HTMLInputElement;
    removeUnNumberChars(targetInputElement);
    if (inputLength == targetInputElement.value.length && onFilled) onFilled();
    sliceOverLength(targetInputElement, inputLength);
}
function sliceOverLength(
    inputElement: HTMLInputElement,
    inputLength: number
): void {
    const targetLength = inputElement.value.length;
    if (targetLength > inputLength)
        inputElement.value = inputElement.value.slice(0, inputLength);
}
function removeUnNumberChars(inputElement: HTMLInputElement): void {
    inputElement.value = inputElement.value.replace(/[^0-9]+/, "");
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
            onInput={(event) => onInputHandler(event, length, props.onFilled)}
            autoComplete="off"
            pattern="[0-9]"
            autoFocus={props.autoFocus}
        />
    );
}
