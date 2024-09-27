import { Card } from "@yakad/ui";
import React from "react";

export interface XtColumnProps {
    dataKey: string;
    headTitle?: string;
    footTitle?: string;
    footFunc?: "sum" | "average";
    alignText?: "start" | "center" | "end";
    sortable?: boolean;
    searchable?: boolean;
    defaultHidden?: boolean;
}

export default function XtColumn(props: XtColumnProps) {
    return <Card>Just use XtColumn inside Xtable!</Card>;
}
