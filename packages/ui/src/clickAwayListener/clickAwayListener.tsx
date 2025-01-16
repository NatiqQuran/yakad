"use client";

import React, { useEffect, useRef } from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./clickAwayListener.module.css";

export interface ClickAwayListenerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    onclickaway: Function;
}

export default function ClickAwayListener(props: ClickAwayListenerProps) {
    const ref = useRef(null);

    useEffect(() => {
        const handleOutSideClick = (event: MouseEvent) => {
            if (ref.current && !(ref.current as any).contains(event.target))
                props.onclickaway;
        };

        document.addEventListener("click", handleOutSideClick, true);

        // CleanUp When element unmount
        return () =>
            document.removeEventListener("click", handleOutSideClick, true);
    }, [props.onclickaway]);

    return (
        <div ref={ref} {...props}>
            {props.children as React.ReactNode}
        </div>
    );
}
