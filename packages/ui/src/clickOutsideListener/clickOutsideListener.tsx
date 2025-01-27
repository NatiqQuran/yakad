"use client";

import React, { forwardRef, useEffect, useRef } from "react";

export interface ClickOutsideListenerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    onclickoutside: () => void;
}

const ClickOutsideListener = ({
    onclickoutside,
    children,
    ...restProps
}: ClickOutsideListenerProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutSideClick = (event: MouseEvent) => {
            if (ref.current && !(ref.current as any).contains(event.target))
                onclickoutside();
        };

        document.addEventListener("click", handleOutSideClick, true);

        // CleanUp When element unmount
        return () =>
            document.removeEventListener("click", handleOutSideClick, true);
    }, [onclickoutside]);

    return (
        <div ref={ref} {...restProps}>
            {children}
        </div>
    );
};

export default ClickOutsideListener;
