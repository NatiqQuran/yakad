import React from "react";

export interface XtColumnProps {
    dataKey: string;
    head?: string;
    foot?: string;
    sortable?: boolean;
    searchable?: boolean;
    defaultHidden?: boolean;
}

export default function XtColumn(props: XtColumnProps) {}
