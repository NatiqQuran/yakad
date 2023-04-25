import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./button.module.css";
import SvgIcon from "../svgIcon/svgIcon";
import Loading from "../loading/loading";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    size?: "small" | "medium" | "large";
    variant?:
        | "text"
        | "outlined"
        | "filled"
        | "filledtonal"
        | "tonal"
        | "elevated"
        | "link";
    borderStyle?: "none" | "semi" | "rounded";
    icon?: JSX.Element;
    iconPosition?: "start" | "end";
    loadingPosition?: "default" | "center";
    loadingVariant?: "scaleOut" | "dots" | "spinner";
    disabled?: boolean;
}

interface svgSizeMap {
    small: number;
    medium: number;
    large: number;
}

const svgSizeMaps: svgSizeMap = {
    small: 2,
    medium: 2.4,
    large: 3,
};

function Button(props: ButtonProps) {
    const startChildren = props.iconPosition === "end";
    const centerLoading =
        !props.icon || (props.loading && props.loadingPosition === "center");

    const joinedClassNames = joinClassNames(
        styles.button,
        props.loading ? styles.loading : "",
        props.variant ? styles[props.variant] : styles.text,
        props.loading && centerLoading ? styles.loadingPositionCenter : "",
        props.size ? styles[props.size] : styles.medium,
        props.borderStyle ? styles[props.borderStyle] : styles.rounded,
        props.icon && !props.children ? styles.iconButton : "",
        props.className!
    );

    return (
        <button {...props} className={joinedClassNames}>
            {startChildren ? props.children : null}
            {props.loading ? (
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
                            ? svgSizeMaps[props.size]
                            : svgSizeMaps.medium
                    }
                >
                    {props.icon}
                </SvgIcon>
            ) : null}
            {!startChildren ? props.children : null}
        </button>
    );
}

export default Button;
