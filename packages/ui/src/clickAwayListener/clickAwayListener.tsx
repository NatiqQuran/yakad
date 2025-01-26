"use client";

import React, { forwardRef, useEffect, useRef } from "react";

export interface ClickAwayListenerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    onclickaway: () => void;
}

const ClickAwayListener = ({
    onclickaway,
    children,
    ...restProps
}: ClickAwayListenerProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutSideClick = (event: MouseEvent) => {
            if (ref.current && !(ref.current as any).contains(event.target))
                onclickaway;
        };

        document.addEventListener("click", handleOutSideClick, true);

        // CleanUp When element unmount
        return () =>
            document.removeEventListener("click", handleOutSideClick, true);
    }, [onclickaway]);

    return (
        <div ref={ref} {...restProps}>
            {children}
        </div>
    );
};

export default ClickAwayListener;
