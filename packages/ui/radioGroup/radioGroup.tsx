"use client";

import React, { useState } from "react";

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    defaultValue?: string;
}

export default function RadioGroup(props: RadioGroupProps) {
    const [checked, setChecked] = useState<number | null>(null);

    const moreThanOneChildExist =
        (props.children as React.ReactNode[]).map !== undefined;

    const renderChildrens = () =>
        (props.children as React.ReactNode[]).map(
            (item: React.ReactNode, index: number) =>
                React.cloneElement(item as React.ReactElement, {
                    handleChecked: () => setChecked(index),
                    handleDefaultChecked: () => setChecked(index),
                    nameFromRadioGroup: props.name,
                    defaultValue: props.defaultValue,
                    checked: checked == index ? true : false,
                })
        );

    const renderOneChild = () =>
        React.cloneElement(props.children as React.ReactElement, {
            handleChecked: () => setChecked(0),
            handleDefaultChecked: () => setChecked(0),
            nameFromRadioGroup: props.name,
            defaultValue: props.defaultValue,
            checked: checked == 0 ? true : false,
        });

    return (
        <div>
            <h1>Clicked: {checked}</h1>
            {props.children
                ? moreThanOneChildExist
                    ? renderChildrens()
                    : renderOneChild()
                : null}
        </div>
    );
}
