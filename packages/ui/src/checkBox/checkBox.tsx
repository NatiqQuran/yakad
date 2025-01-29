import React, { forwardRef } from "react";
import classNames from "classnames";
import Symbol from "@yakad/symbols";

import styles from "./checkBox.module.css";

export interface CheckBoxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
    ({ label, className, style, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.label,
            { [styles.labeled]: label },
            className
        );

        return (
            <label className={joinedClassNames} style={style}>
                {label}
                <input
                    ref={ref}
                    {...restProps}
                    className={styles.input}
                    type="checkbox"
                />
                <div className={styles.symbolContainer}>
                    <Symbol
                        className={styles.symbolChecked}
                        icon={"check_box"}
                    />
                    <Symbol
                        className={styles.symbolUnChecked}
                        icon={"check_box_outline_blank"}
                    />
                </div>
            </label>
        );
    }
);

export default CheckBox;
