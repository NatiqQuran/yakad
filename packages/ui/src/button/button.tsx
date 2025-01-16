import React from "react";
import { joinClassNames } from "@yakad/lib";
import Loading from "../loading/loading";
import styles from "./button.module.css";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type?: "button" | "reset" | "submit";
    size?: "small" | "medium" | "large";
    variant?:
        | "text"
        | "outlined"
        | "filled"
        | "filledtonal"
        | "tonal"
        | "elevated"
        | "link"
        | "fab";
    borderstyle?: "none" | "semi" | "squircle" | "rounded";
    icon?: JSX.Element;
    iconposition?: "start" | "end";
    loadingposition?: "auto" | "center";
    loadingvariant?: "scaleOut" | "dots" | "spinner";
    disabled?: boolean;
}

interface iconSizeMap {
    small: number;
    medium: number;
    large: number;
}

const iconSizeMaps: iconSizeMap = {
    small: 2,
    medium: 2.4,
    large: 3.2,
};

export default function Button(props: ButtonProps) {
    const startWithChildren = props.iconposition === "end";
    const centerLoading =
        !props.icon ||
        (props.loadingvariant && props.loadingposition === "center");

    const joinedClassNames = joinClassNames(
        styles.button,
        props.variant ? styles[props.variant] : styles.text,
        props.loadingvariant ? styles.loading : "",
        props.loadingvariant && centerLoading
            ? styles.loadingpositionCenter
            : "",
        props.size ? styles[props.size] : styles.medium,
        props.borderstyle ? styles[props.borderstyle] : styles.rounded,
        props.icon && !props.children ? styles.iconButton : "",
        props.className!
    );

    return (
        <button {...props} type={props.type} className={joinedClassNames}>
            {startWithChildren ? props.children : null}
            {props.loadingvariant ? (
                <div
                    className={joinClassNames(
                        centerLoading ? styles.positionCenter : "",
                        styles.displayOnDisabled
                    )}
                >
                    <Loading size={props.size} variant={props.loadingvariant} />
                </div>
            ) : null}
            {props.icon ? props.icon : null}
            {!startWithChildren ? props.children : null}
        </button>
    );
}
