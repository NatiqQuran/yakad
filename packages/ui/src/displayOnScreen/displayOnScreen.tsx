import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./displayOnScreen.module.css";

export interface DisplayOnScreenProps
    extends React.HTMLAttributes<HTMLElement> {
    largerthan?: "xs" | "sm" | "md" | "lg" | "xl";
    smallerorequalto?: "xs" | "sm" | "md" | "lg" | "xl";
}

export default function DisplayOnScreen(props: DisplayOnScreenProps) {
    const joinedClassNames = joinClassNames(
        props.largerthan ? styles[props.largerthan + "LargerThan"] : "",
        props.smallerorequalto
            ? styles[props.smallerorequalto + "SmallerOrEqual"]
            : "",
        props.className!
    );

    return (
        <div {...props} className={joinedClassNames}>
            {props.children}
        </div>
    );
}
