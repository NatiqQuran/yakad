import React from "react";
import { joinClassNames } from "@yakad/lib";
import Symbol from "@yakad/symbols";
import Card from "../card/card";
import Button from "../button/button";
import styles from "./codeBox.module.css";

export interface CodeBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    copybutton?: boolean;
}

export default function CodeBox(props: CodeBoxProps) {
    const joinedClassNames = joinClassNames(
        styles.ZZZZZZZZZZ,
        props.className!
    );

    return (
        <Card {...props} className={joinedClassNames}>
            <pre>{props.children as React.ReactNode}</pre>
            <Button icon={<Symbol icon="copy_all" />} />
        </Card>
    );
}
