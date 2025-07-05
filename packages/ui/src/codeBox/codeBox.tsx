import React, { forwardRef, useReducer, useRef } from "react";
import classNames from "classnames";
import Symbol from "@yakad/symbols";

import styles from "./codeBox.module.css";
import Card from "../card/card";
import Button from "../button/button";

export interface CodeBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    copybutton?: boolean;
    children?: React.ReactNode;
}

export const CodeBox = forwardRef<HTMLDivElement, CodeBoxProps>(
    ({ copybutton, className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(styles.ZZZZZZZZZZ, className);

        return (
            <Card ref={ref} {...restProps} className={joinedClassNames}>
                <pre>{children}</pre>
                {copybutton && <Button icon={<Symbol icon="copy_all" />} />}
            </Card>
        );
    }
);
