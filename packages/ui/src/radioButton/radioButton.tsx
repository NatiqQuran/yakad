"use client";

import React, { useState, useRef, forwardRef, useEffect } from "react";
import styles from "./radioButton.module.css";
import Button from "../button/button";
import { joinClassNames } from "@yakad/lib";
import Symbol from "@yakad/symbols";

export interface RadioButtonProps
    extends React.HTMLAttributes<HTMLInputElement> {
    nameFromRadioGroup?: string;
    label?: string;
    value?: string;
    defaultValue?: string;
    checked?: boolean;
    disabled?: boolean;
    handleChecked?: () => void;
    handleDefaultChecked?: () => void;
}

export default function RadioButton(props: RadioButtonProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const joinedClassNames = joinClassNames(
        styles.radiobutton,
        props.label ? styles.labeled : ""
    );

    useEffect(() => {
        props.value == props.defaultValue && props.handleDefaultChecked
            ? props.handleDefaultChecked()
            : null;
    }, []);

    const onClickRadioButtonHandler = () => {
        props.handleChecked ? props.handleChecked() : null;
    };

    return (
        <div className={joinedClassNames}>
            {props.label ? (
                <label
                    className={styles.label}
                    htmlFor={props.nameFromRadioGroup}
                >
                    {props.label}
                </label>
            ) : null}
            <Button
                disabled={props.disabled}
                icon={
                    <Symbol
                        icon={
                            props.checked
                                ? "radio_button_checked"
                                : "radio_button_unchecked"
                        }
                    />
                }
                onClick={onClickRadioButtonHandler}
            />
            <input
                ref={inputRef}
                {...props}
                className={styles.input}
                type="radio"
                name={props.nameFromRadioGroup}
                value={props.value}
                checked={props.checked}
                disabled={props.disabled}
            />
        </div>
    );
}
