"use client";

import React, { useState, forwardRef, Children, useEffect } from "react";
import RadioButton, { RadioButtonProps } from "../radioButton/radioButton";

type RadioButtonElement = React.ReactElement<RadioButtonProps>;
type excludedTypes = "defaultValue" | "children";
export interface RadioGroupProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, excludedTypes> {
    name: string;
    defaultvalue?: string;
    children?: RadioButtonElement | RadioButtonElement[];
}

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
    ({ name, defaultvalue, className, children, ...restProps }, ref) => {
        const [checked, setChecked] = useState<number | null>(null);

        const arrayChildren = Children.toArray(children);

        useEffect(() => {
            (arrayChildren as RadioButtonElement[]).map((item, index) => {
                if (
                    defaultvalue
                        ? item.props.value === defaultvalue
                        : item.props.defaultChecked
                )
                    setChecked(index);
            });
        }, []);

        const renderChildrens = () =>
            (arrayChildren as RadioButtonElement[]).map((item, index) => {
                return (
                    <RadioButton
                        {...item.props}
                        datafromradiogroup={{
                            name: name,
                            setChecked: () => setChecked(index),
                            checked: checked === index,
                        }}
                    />
                );
            });

        return (
            <div ref={ref} {...restProps} className={className}>
                {children && renderChildrens()}
            </div>
        );
    }
);

export default RadioGroup;
