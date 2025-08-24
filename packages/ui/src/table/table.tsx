import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./table.module.css";

export interface TableProps
    extends React.TableHTMLAttributes<HTMLTableElement> {
    children?: React.ReactNode;
}
export const Table = forwardRef<HTMLTableElement, TableProps>(
    ({ className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            "allowFullWidth",
            styles.table,
            className
        );

        return (
            <table ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </table>
        );
    }
);

export interface TheadProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {
    children?: React.ReactNode;
}
export const Thead = forwardRef<HTMLTableSectionElement, TheadProps>(
    ({ className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(styles.thead, className);

        return (
            <thead ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </thead>
        );
    }
);

export interface TbodyProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {
    children?: React.ReactNode;
}
export const Tbody = forwardRef<HTMLTableSectionElement, TbodyProps>(
    ({ className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(styles.tbody, className);

        return (
            <tbody ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </tbody>
        );
    }
);

export interface TfootProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {
    children?: React.ReactNode;
}
export const Tfoot = forwardRef<HTMLTableSectionElement, TfootProps>(
    ({ className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(styles.tfoot, className);

        return (
            <tfoot ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </tfoot>
        );
    }
);

export interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children?: React.ReactNode;
}
export const Tr = forwardRef<HTMLTableRowElement, TrProps>(
    ({ className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(styles.tr, className);

        return (
            <tr ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </tr>
        );
    }
);

export interface ThProps extends React.HTMLAttributes<HTMLTableCellElement> {
    children?: React.ReactNode;
}
export const Th = forwardRef<HTMLTableCellElement, ThProps>(
    ({ className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(styles.th, className);

        return (
            <th ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </th>
        );
    }
);

export interface TdProps extends React.HTMLAttributes<HTMLTableCellElement> {
    children?: React.ReactNode;
}
export const Td = forwardRef<HTMLTableCellElement, TdProps>(
    ({ className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(styles.td, className);

        return (
            <td ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </td>
        );
    }
);
