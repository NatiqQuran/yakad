import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./table.module.css";

export const Table = forwardRef<
    HTMLTableElement,
    React.TableHTMLAttributes<HTMLTableElement>
>(({ className, children, ...restProps }, ref) => {
    const joinedClassNames = classNames(styles.table, className);

    return (
        <table ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </table>
    );
});

export const Thead = forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, children, ...restProps }, ref) => {
    const joinedClassNames = classNames(styles.thead, className);

    return (
        <thead ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </thead>
    );
});

export const Tbody = forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, children, ...restProps }, ref) => {
    const joinedClassNames = classNames(styles.tbody, className);

    return (
        <tbody ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </tbody>
    );
});

export const Tfoot = forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, children, ...restProps }, ref) => {
    const joinedClassNames = classNames(styles.tfoot, className);

    return (
        <tfoot ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </tfoot>
    );
});

export const Tr = forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, children, ...restProps }, ref) => {
    const joinedClassNames = classNames(styles.tr, className);

    return (
        <tr ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </tr>
    );
});

export const Th = forwardRef<
    HTMLTableCellElement,
    React.HTMLAttributes<HTMLTableCellElement>
>(({ className, children, ...restProps }, ref) => {
    const joinedClassNames = classNames(styles.th, className);

    return (
        <th ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </th>
    );
});

export const Td = forwardRef<
    HTMLTableCellElement,
    React.HTMLAttributes<HTMLTableCellElement>
>(({ className, children, ...restProps }, ref) => {
    const joinedClassNames = classNames(styles.td, className);

    return (
        <td ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </td>
    );
});
