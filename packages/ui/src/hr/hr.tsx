import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./hr.module.css";

export interface HrProps extends React.HTMLAttributes<HTMLHRElement> {
    variant?: "dotted" | "dashed" | "shortLine";
    height?: number;
    marginx?: number;
}

export const Hr = forwardRef<HTMLHRElement, HrProps>(
    ({ variant, height, marginx, className, style, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.hr,
            variant && styles[variant],
            className
        );

        const joinedStyles = {
            ...style,
            borderTopWidth: height ? `${height}rem` : style?.borderTopWidth,
            marginTop: marginx ? `${marginx}rem` : style?.marginTop,
            marginBottom: marginx ? `${marginx}rem` : style?.marginBottom,
        };

        return (
            <hr
                ref={ref}
                {...restProps}
                className={joinedClassNames}
                style={joinedStyles}
            />
        );
    }
);
