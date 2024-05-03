import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./inputField.module.css";

export interface InputFieldProps
    extends React.HTMLAttributes<HTMLInputElement> {
    variant?: "standard" | "outlined" | "filled";
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    name?: string;
    value?: string;
    required?: boolean;
    autoFocus?: boolean;
}

export default function InputField(props: InputFieldProps) {
    const joinedClassNames = joinClassNames(
        styles.input,
        props.variant ? styles[props.variant] : styles.outlined,
        // Default style must be standard. but standard input is not designed in css
        props.className!
    );

    return (
        <label className={styles.label}>
            <input
                {...props}
                name={props.name}
                disabled={props.disabled}
                placeholder="  "
                className={joinedClassNames}
                type={props.type}
                value={props.value}
                autoFocus={props.autoFocus}
            />
            <span className={styles.span}>{props.placeholder}</span>
        </label>
    );
}
