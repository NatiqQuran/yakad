"use client";

import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import Symbol from "@yakad/symbols";

import styles from "./radioButton.module.css";
import Button from "../button/button";

export interface RadioButtonProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    namefromradiogroup?: string;
    label?: string;
    defaultvalue?: string;
    handlechecked?: Function;
}

export default function RadioButton(props: RadioButtonProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const joinedClassNames = classNames(styles.radiobutton, {
        [styles.labeled]: props.label,
    });

    useEffect(() => {
        props.value == props.defaultvalue &&
            props.handlechecked &&
            props.handlechecked();
    }, []);

    const onClickRadioButtonHandler = () => {
        props.handlechecked && props.handlechecked();
    };

    return (
        <div className={joinedClassNames}>
            {props.label ? (
                <label
                    className={styles.label}
                    htmlFor={props.namefromradiogroup}
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
                name={props.namefromradiogroup}
            />
        </div>
    );
}
