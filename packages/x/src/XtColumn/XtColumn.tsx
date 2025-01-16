import { Card } from "@yakad/ui";
import React from "react";

export interface XtColumnProps {
    datakey: string;
    headtitle?: string;
    foottitle?: string;
    footfunc?: "sum" | "average";
    aligntext?: "start" | "center" | "end";
    sortable?: boolean;
    searchable?: boolean;
    defaulthidden?: boolean;
}

export default function XtColumn(props: XtColumnProps) {
    return <Card>Just use XtColumn inside Xtable!</Card>;
}
