import React, { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./select.module.css";
import inputStyles from "../inputField/inputField.module.css";

export interface SelectProps
    extends DetailedHTMLProps<
        SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    > {
    variant?: "outlined" | "filled";
    boxSize?: "small" | "normal";
    placeholder?: string;
}
export default function Select(props: SelectProps) {
    const joinedClassNames = joinClassNames(
        styles.select,
        inputStyles.input,
        props.variant ? inputStyles[props.variant] : inputStyles.outlined,
        props.boxSize ? inputStyles[props.boxSize] : inputStyles.normal,
        props.placeholder ? inputStyles.havePlaceHolder : "",
        props.className!
    );
    return (
        <div className={inputStyles.div}>
            <select {...props} className={joinedClassNames}>
                {props.children}
            </select>
            {props.placeholder ? (
                <label className={inputStyles.label}>{props.placeholder}</label>
            ) : null}
        </div>
    );
}
