import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./screen.module.css";
import boxingStyles from "../boxing.module.css";

export interface ScreenProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    children?: React.ReactNode;
}

export const Screen = forwardRef<HTMLDivElement, ScreenProps>(
    ({ align, className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            boxingStyles.flexColumnBox,
            { [boxingStyles[align as string]]: align },
            styles.screen,
            className
        );

        return (
            <div ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </div>
        );
    }
);
