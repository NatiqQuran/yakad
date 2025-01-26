"use client";

import React, { forwardRef } from "react";
import classNames from "classnames";
import Symbol from "@yakad/symbols";

import styles from "./checkBox.module.css";
import Button from "../button/button";

export interface CheckBoxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
    ({ label, className, style, ...restProps }, ref) => {
        const joinedClassNames = classNames(styles.checkbox, {
            [styles.labeled]: label,
        });

        const [checked, setChecked] = React.useState<boolean>(
            restProps.checked || false
        );
        const toggleCheckbox = () => {
            setChecked((value) => !value);
        };

        return (
            <div className={joinedClassNames} style={style}>
                {label && (
                    <label className={styles.label} htmlFor={restProps.name}>
                        {label}
                    </label>
                )}
                <Button
                    type="button"
                    icon={
                        <Symbol
                            icon={
                                checked
                                    ? "check_box"
                                    : "check_box_outline_blank"
                            }
                        />
                    }
                    onClick={toggleCheckbox}
                    disabled={restProps.disabled}
                />
                <input
                    ref={ref}
                    {...restProps}
                    className={styles.input}
                    type="checkbox"
                    checked={checked}
                />
            </div>
        );
    }
);

export default CheckBox;
