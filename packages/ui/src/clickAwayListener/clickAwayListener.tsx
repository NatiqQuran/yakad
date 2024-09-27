"use client";

import React, { useEffect, useRef } from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./clickAwayListener.module.css";

export interface ClickAwayListenerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    onClickAway: React.MouseEventHandler<HTMLDivElement>;
}

export default function ClickAwayListener(props: ClickAwayListenerProps) {
    const ref = useRef(null);

    useEffect(() => {
        const handleOutSideClick = (event: MouseEvent) => {
            if (ref.current && !(ref.current as any).contains(event.target)) {
                props.onClickAway && props.onClickAway(event as any);
            }
        };

        document.addEventListener("click", handleOutSideClick, true);

        // CleanUp When element unmount
        return () =>
            document.removeEventListener("click", handleOutSideClick, true);
    }, [props.onClickAway]);

    return (
        <div ref={ref} {...props}>
            {props.children as React.ReactNode}
        </div>
    );
}
