"use client";

import { forwardRef } from "react";
import { Table, TableProps } from "@yakad/ui";

export interface XTableProps extends TableProps {}

export const XTable = forwardRef<HTMLTableElement, XTableProps>(
    ({ children, ...restProps }, ref) => {
        return (
            <Table ref={ref} {...restProps}>
                {children}
            </Table>
        );
    }
);
XTable.displayName = "XTable";
