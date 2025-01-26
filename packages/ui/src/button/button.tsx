import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./button.module.css";
import Loading from "../loading/loading";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            size = "medium",
            variant = "text",
            borderstyle = "rounded",
            icon,
            iconposition = "start",
            loadingposition = "auto",
            loadingvariant,
            className,
            children,
            ...restProps
        },
        ref
    ) => {
        const childrenFirst: boolean = Boolean(iconposition === "end");
        const isLoadingPositionCenter: boolean = Boolean(
            !icon || loadingposition === "center"
        );

        const joinedClassNames = classNames(
            styles.button,
            styles[variant],
            { [styles.loading]: loadingvariant },
            { [styles.loadingPositionCenter]: isLoadingPositionCenter },
            styles[size],
            styles[borderstyle],
            { [styles.iconButton]: !children && icon },
            className
        );

        return (
            <button ref={ref} className={joinedClassNames} {...restProps}>
                {childrenFirst && children}
                {loadingvariant && (
                    <div
                        className={classNames(styles.displayOnDisabled, {
                            [styles.positionCenter]: isLoadingPositionCenter,
                        })}
                    >
                        <Loading size={size} variant={loadingvariant} />
                    </div>
                )}
                {icon}
                {!childrenFirst && children}
            </button>
        );
    }
);

export default Button;
