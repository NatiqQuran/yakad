import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./displayOnScreen.module.css";

export interface DisplayOnScreenProps
    extends React.HTMLAttributes<HTMLElement> {
    largerThan?: "xs" | "sm" | "md" | "lg" | "xl";
    smallerOrEqualTo?: "xs" | "sm" | "md" | "lg" | "xl";
}

export default function DisplayOnScreen(props: DisplayOnScreenProps) {
    const joinedClassNames = joinClassNames(
        props.largerThan ? styles[props.largerThan + "LargerThan"] : "",
        props.smallerOrEqualTo
            ? styles[props.smallerOrEqualTo + "SmallerOrEqual"]
            : "",
        props.className!
    );

    return (
        <div {...props} className={joinedClassNames}>
            {props.children}
        </div>
    );
}
