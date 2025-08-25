"use client";

import { forwardRef } from "react";
import classNames from "classnames";
import Symbol from "@yakad/symbols";

import styles from "./radioButton.module.css";
import { Button } from "../";

type ExcludedTypes =
    | "type"
    | "name"
    | "defaultValue"
    | "defaultChecked"
    | "checked";
export interface RadioButtonProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, ExcludedTypes> {
    value: string | number;
    label?: string;
    datafromradiogroup?: {
        name: string;
        onSelect: () => void;
        checked: boolean;
    };
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
    ({ datafromradiogroup, label, onClick, className, ...restProps }, ref) => {
        const joinedClassNames = classNames(styles.radiobutton, {
            [styles.labeled]: label,
        });

        const onClickRadioButtonHandler = () => {
            datafromradiogroup?.onSelect();
            onClick;
        };

        return (
            <div className={joinedClassNames}>
                {label && (
                    <label
                        className={styles.label}
                        htmlFor={datafromradiogroup?.name}
                    >
                        {label}
                    </label>
                )}
                <Button
                    icon={
                        <Symbol
                            icon={
                                datafromradiogroup?.checked
                                    ? "radio_button_checked"
                                    : "radio_button_unchecked"
                            }
                        />
                    }
                    onClick={onClickRadioButtonHandler}
                    disabled={restProps.disabled}
                />
                <input
                    ref={ref}
                    {...restProps}
                    className={styles.input}
                    type="radio"
                    name={datafromradiogroup?.name}
                    checked={datafromradiogroup?.checked}
                />
            </div>
        );
    }
);
