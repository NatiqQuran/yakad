"use client";

import React, { useState } from "react";
import { joinClassNames } from "@yakad/lib";
import Symbol from "@yakad/symbols";
import styles from "./checkbox.module.css";
import Button from "../button/button";

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    name?: string;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
}

export default function Chekbox(props: CheckboxProps) {
    const joinedClassNames = joinClassNames(
        styles.checkbox,
        props.label ? styles.labeled : ""
    );

    const [checked, setChecked] = React.useState<boolean>(
        props.checked ? props.checked : false
    );
    const onClickCheckboxHandler = () => {
        setChecked((value) => !value);
    };

    return (
        <div className={joinedClassNames}>
            {props.label ? (
                <label className={styles.label} htmlFor={props.name}>
                    {props.label}
                </label>
            ) : null}
            <Button
                type="button"
                icon={
                    <Symbol
                        icon={checked ? "check_box" : "check_box_outline_blank"}
                    />
                }
                onClick={(event) => onClickCheckboxHandler()}
                disabled={props.disabled}
            />
            <input
                {...props}
                className={styles.input}
                type="checkbox"
                name={props.name}
                checked={checked}
                disabled={props.disabled}
            />
        </div>
    );
}
