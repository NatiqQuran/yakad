import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./table.module.css";

export function Table(props: React.HTMLAttributes<HTMLElement>) {
    const joinedClassNames = joinClassNames(styles.table, props.className!);

    return (
        <table {...props} className={joinedClassNames}>
            {props.children as any}
        </table>
    );
}

export function Thead(props: React.HTMLAttributes<HTMLElement>) {
    const joinedClassNames = joinClassNames(styles.thead, props.className!);

    return (
        <thead {...props} className={joinedClassNames}>
            {props.children as any}
        </thead>
    );
}

export function Tbody(props: React.HTMLAttributes<HTMLElement>) {
    const joinedClassNames = joinClassNames(styles.tbody, props.className!);

    return (
        <tbody {...props} className={joinedClassNames}>
            {props.children as any}
        </tbody>
    );
}

export function Tfoot(props: React.HTMLAttributes<HTMLElement>) {
    const joinedClassNames = joinClassNames(styles.tfoot, props.className!);

    return (
        <tfoot {...props} className={joinedClassNames}>
            {props.children as any}
        </tfoot>
    );
}

export function Tr(props: React.HTMLAttributes<HTMLElement>) {
    const joinedClassNames = joinClassNames(styles.tr, props.className!);

    return (
        <tr {...props} className={joinedClassNames}>
            {props.children as any}
        </tr>
    );
}

export function Th(props: React.HTMLAttributes<HTMLElement>) {
    const joinedClassNames = joinClassNames(styles.th, props.className!);

    return (
        <th {...props} className={joinedClassNames}>
            {props.children as any}
        </th>
    );
}

export function Td(props: React.HTMLAttributes<HTMLElement>) {
    const joinedClassNames = joinClassNames(styles.td, props.className!);

    return (
        <td {...props} className={joinedClassNames}>
            {props.children as any}
        </td>
    );
}
