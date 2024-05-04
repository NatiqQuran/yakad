"use client";

import React, { useState } from "react";
import Button from "../button/button";
import styles from "./checkbox.module.css";
import { joinClassNames } from "@yakad/lib";

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    name?: string;
    label?: string;
    disabled?: boolean;
}

export default function Chekbox(props: CheckboxProps) {
    const joinedClassNames = joinClassNames(
        styles.checkbox,
        props.label ? styles.labeled : ""
    );

    const [checked, setChecked] = React.useState<boolean>();
    const onChangeCheckboxHandler = (
        event: React.FormEvent<HTMLInputElement>
    ) => {
        const targetInputElement = event.target as HTMLInputElement;
        setChecked(targetInputElement.checked);
    };

    return (
        <div className={joinedClassNames}>
            {props.label ? (
                <label className={styles.label} htmlFor={props.name}>
                    {props.label}
                </label>
            ) : null}
            <Button
                disabled={props.disabled}
                icon={checked ? "check_box" : "check_box_outline_blank"}
            />
            <input
                {...props}
                className={styles.input}
                type="checkbox"
                name={props.name}
                disabled={props.disabled}
                onChange={(event) => onChangeCheckboxHandler(event)}
            />
        </div>
    );
}
