"use client";

import React, { ReactElement } from "react";
import { Table } from "@yakad/ui";

export interface XTableProps extends React.HTMLAttributes<HTMLElement> {}
export default function XTable(props: XTableProps) {
    return <Table {...props}>{props.children as React.ReactNode}</Table>;
}
