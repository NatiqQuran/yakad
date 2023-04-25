import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./inputField.module.css";

interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    variant?: "standard" | "outlined" | "filled";
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    name?: string;
    value?: string;
    required?: string;
}

function InputField(props: InputFieldProps) {
    const joinedClassNames = joinClassNames(
        styles.input,
        props.variant ? styles[props.variant] : styles.standard,
        props.className!
    );

    return (
        <label className={styles.field}>
            <input
                {...props}
                name={props.name}
                disabled={props.disabled}
                placeholder="&nbsp;"
                type={props.type}
                value={props.value}
                required={props.required}
                className={joinedClassNames}
            />
            <span className={styles.placeholder}>{props.placeholder}</span>
        </label>
    );
}

export default InputField;
