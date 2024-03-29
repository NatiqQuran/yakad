import React from "react";
import { joinClassNames } from "@yakad/lib";
import SvgIcon from "../svgIcon/svgIcon";
import Loading from "../loading/loading";
import styles from "./button.module.css";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
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
    borderStyle?: "none" | "semi" | "squircle" | "rounded";
    icon?: JSX.Element;
    iconPosition?: "start" | "end";
    loadingPosition?: "auto" | "center";
    loadingVariant?: "scaleOut" | "dots" | "spinner";
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
    const startWithChildren = props.iconPosition === "end";
    const centerLoading =
        !props.icon ||
        (props.loadingVariant && props.loadingPosition === "center");

    const joinedClassNames = joinClassNames(
        styles.button,
        props.variant ? styles[props.variant] : styles.text,
        props.loadingVariant ? styles.loading : "",
        props.loadingVariant && centerLoading
            ? styles.loadingPositionCenter
            : "",
        props.size ? styles[props.size] : styles.medium,
        props.borderStyle ? styles[props.borderStyle] : styles.rounded,
        props.icon && !props.children ? styles.iconButton : "",
        props.className!
    );

    return (
        <button {...props} className={joinedClassNames}>
            {startWithChildren ? props.children : null}
            {props.loadingVariant ? (
                <div
                    className={joinClassNames(
                        centerLoading ? styles.positionCenter : "",
                        styles.displayOnDisabled
                    )}
                >
                    <Loading size={props.size} variant={props.loadingVariant} />
                </div>
            ) : null}
            {props.icon ? (
                <SvgIcon
                    className={styles.hideOnDisabled}
                    size={
                        props.size
                            ? iconSizeMaps[props.size]
                            : iconSizeMaps.medium
                    }
                >
                    {props.icon}
                </SvgIcon>
            ) : null}
            {!startWithChildren ? props.children : null}
        </button>
    );
}
