"use client";

import React, { useState, forwardRef, Children } from "react";
import RadioButton, { RadioButtonProps } from "../radioButton/radioButton";

type RadioButtonElement = React.ReactElement<RadioButtonProps>;
export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    defaultvalue?: string;
    children?: RadioButtonElement | RadioButtonElement[];
}

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
    ({ name, defaultvalue, className, children, ...restProps }, ref) => {
        const [checked, setChecked] = useState<number | null>(null);

        const arrayChildren = Children.toArray(children);

        const renderChildrens = () =>
            (arrayChildren as RadioButtonElement[]).map((item, index) => {
                if (
                    defaultvalue
                        ? item.props.value === defaultvalue
                        : item.props.defaultChecked
                )
                    setChecked(index);
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
