"use client";

import React, { Children, useState } from "react";

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    defaultValue?: string;
}

export default function RadioGroup(props: RadioGroupProps) {
    const [checked, setChecked] = useState<number | null>(null);

    const arrayChildren = Children.toArray(props.children);

    const renderChildrens = () =>
        (arrayChildren as React.ReactElement[]).map(
            (item: React.ReactElement, index: number) =>
                React.cloneElement(item as React.ReactElement, {
                    handleChecked: () => setChecked(index),
                    handleDefaultChecked: () => setChecked(index),
                    nameFromRadioGroup: props.name,
                    defaultValue: props.defaultValue,
                    checked: checked == index ? true : false,
                })
        );

    return <div>{props.children ? renderChildrens() : null}</div>;
}
