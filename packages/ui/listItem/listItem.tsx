import React from "react";
import styles from "./listItem.module.css";

export default function ListItem(props: React.HTMLAttributes<HTMLLIElement>) {
    return (
        <li className={styles.listItem} {...props}>
            {props.children as any}
        </li>
    );
}
