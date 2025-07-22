import { Card } from "@yakad/ui";

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

export const XtColumn = (props: XtColumnProps) => (
    <Card>Just use XtColumn inside Xtable!</Card>
);
