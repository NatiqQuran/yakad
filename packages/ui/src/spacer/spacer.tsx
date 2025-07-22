import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./spacer.module.css";

type ExcludedTypes = "children";
export interface SpacerProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, ExcludedTypes> {}

export const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
    ({ className, ...restProps }, ref) => {
        const joinedClassNames = classNames(styles.spacer, className);

        return <div ref={ref} {...restProps} className={joinedClassNames} />;
    }
);
