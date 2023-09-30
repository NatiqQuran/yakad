import React from "react";
import styles from "./loading.module.css";
import { joinClassNames } from "@yakad/lib";

interface LoadingProps extends React.HTMLAttributes<HTMLButtonElement> {
    size?: "small" | "medium" | "large";
    variant?: "scaleOut" | "dots" | "spinner";
}

export default function Loading(props: LoadingProps) {
    const joinedClassNames = joinClassNames(
        styles.loading,
        props.size ? styles[props.size] : styles.medium,
        props.variant ? styles[props.variant] : styles.spinner,
        props.className!
    );

    return (
        <div className={joinedClassNames}>
            <div></div>
        </div>
    );
}
