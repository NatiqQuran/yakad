"use client";

import React, { useState, forwardRef, Children } from "react";
import { RadioButton, RadioButtonProps } from "../radioButton/radioButton";

type RadioButtonElement = React.ReactElement<RadioButtonProps>;
type ExcludedTypes = "defaultValue" | "children";
export interface RadioGroupProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, ExcludedTypes> {
    name: string;
    defaultvalue?: string;
    children?: RadioButtonElement | RadioButtonElement[];
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
    ({ name, defaultvalue, className, children, ...restProps }, ref) => {
        const [selectedValue, setSelectedValue] = useState<
            string | number | null
        >(defaultvalue || null);

        const arrayChildren = Children.toArray(children);

        const renderChildrens = () =>
            (arrayChildren as RadioButtonElement[]).map((child, index) => (
                <RadioButton
                    key={index}
                    {...child.props}
                    datafromradiogroup={{
                        name: name,
                        onSelect: () => setSelectedValue(child.props.value),
                        checked: selectedValue === child.props.value,
                    }}
                />
            ));

        return (
            <div ref={ref} {...restProps} className={className}>
                {renderChildrens()}
            </div>
        );
    }
);
