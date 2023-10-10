import React from "react";

// useForm handle function type
type HandleType = (
    event:
        | React.ChangeEvent<HTMLInputElement>
        | React.FormEvent<HTMLFormElement>
) => void;

/**
 * Handle's HTML forms
 */
export default function useForm<T = object>(initFormData?: T): [T, HandleType] {
    let [formData, setFormData] = React.useState(initFormData);

    const appendToState = (newValue: T) =>
        setFormData((data) => ({ ...data, ...newValue }));

    const handle = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.FormEvent<HTMLFormElement>
    ) => {
        const eventAsInput = event as React.ChangeEvent<HTMLInputElement>;
        const targetName = eventAsInput.target.name;
        const targetType = eventAsInput.target.type;

        if (targetType === "number") {
            appendToState({
                [targetName]: parseInt(eventAsInput.target.value, 10),
            } as T);
        }
        else if (targetType === "checkbox") {
            appendToState({
                [targetName]: eventAsInput.target.checked,
            } as T);
        }
        else {
            appendToState({ [targetName]: eventAsInput.target.value } as T);
        }
    };

    return [formData, handle]
}
