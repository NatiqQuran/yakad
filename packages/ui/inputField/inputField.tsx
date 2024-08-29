import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./inputField.module.css";

export interface InputFieldProps
    extends React.HTMLAttributes<HTMLInputElement> {
    variant?: "outlined" | "filled";
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
        props.placeholder ? styles.havePlaceHolder : "",
        props.className!
    );

    return (
        <div className={styles.div}>
            <input
                {...props}
                name={props.name}
                disabled={props.disabled}
                placeholder=" "
                className={joinedClassNames}
                type={props.type}
                value={props.value}
                autoFocus={props.autoFocus}
            />
            {props.placeholder ? (
                <label className={styles.label}>{props.placeholder}</label>
            ) : null}
        </div>
    );
}
