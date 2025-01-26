import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./listItem.module.css";

export type ListItemProps = React.HTMLAttributes<HTMLLIElement>;

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
    ({ className, children, ...restProps }, ref) => {
        return (
            <li
                ref={ref}
                {...restProps}
                className={classNames(styles.listItem, className)}
            >
                {children}
            </li>
        );
    }
);

export default ListItem;
