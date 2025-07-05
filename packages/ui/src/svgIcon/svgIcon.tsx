import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./svgIcon.module.css";

export interface SvgIconProps extends React.HTMLAttributes<HTMLElement> {
    size?: number;
    children?: React.ReactNode;
}

export const SvgIcon = forwardRef<HTMLDivElement, SvgIconProps>(
    ({ size, className, style, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(styles.svg, className!);

        const sizeStyle = size && { width: `${size}rem`, height: `${size}rem` };

        return (
            <div
                {...restProps}
                className={joinedClassNames}
                style={{
                    ...style,
                    ...sizeStyle,
                }}
            >
                {children}
            </div>
        );
    }
);
