import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./Xbackground.module.css";

export interface XbackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "dotted" | "strips";
    separator?: "shadowinside" | "shadowoutside";
    imageSrc?: string;
    fixed?: boolean;
    children?: React.ReactNode;
}

const Xbackground = forwardRef<HTMLDivElement, XbackgroundProps>(
    (
        {
            variant = "dotted",
            separator,
            imageSrc,
            fixed,
            className,
            style,
            children,
            ...restProps
        },
        ref
    ) => {
        const joinedClassNames = classNames(
            styles.background,
            styles[variant],
            { [styles[separator as string]]: separator },
            { [styles.image]: imageSrc },
            { [styles.fixed]: fixed },
            className
        );

        const joinedStyles = imageSrc
            ? { ...style, backgroundImage: `url(${imageSrc})` }
            : style;

        return (
            <div
                ref={ref}
                {...restProps}
                className={joinedClassNames}
                style={joinedStyles}
            >
                {children}
            </div>
        );
    }
);

export default Xbackground;
