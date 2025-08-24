import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./listItem.module.css";
import boxingStyles from "../boxing.module.css";

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
    align?: "start" | "center" | "end";
}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
    ({ align, className, children, ...restProps }, ref) => {
        return (
            <li
                ref={ref}
                {...restProps}
                className={classNames(
                    boxingStyles.flexColumnBox,
                    { [boxingStyles[align as string]]: align },
                    styles.listItem,
                    className
                )}
            >
                {children}
            </li>
        );
    }
);
