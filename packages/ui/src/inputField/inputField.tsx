import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./inputField.module.css";

export interface InputFieldProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: "outlined" | "filled";
    boxsize?: "small" | "normal";
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    (
        {
            variant = "outlined",
            boxsize = "normal",
            placeholder,
            className,
            ...restProps
        },
        ref
    ) => {
        const joinedClassNames = classNames(
            styles.input,
            styles[variant],
            styles[boxsize],
            placeholder && styles.havePlaceHolder,
            className
        );

        return (
            <div className={styles.div}>
                <input
                    ref={ref}
                    {...restProps}
                    className={joinedClassNames}
                    placeholder=" "
                />
                {placeholder && (
                    <label className={styles.label}>{placeholder}</label>
                )}
            </div>
        );
    }
);
