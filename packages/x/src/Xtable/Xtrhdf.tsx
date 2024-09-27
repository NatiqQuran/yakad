"use client";

import React, { ReactElement } from "react";
import { Tr, Th, Td } from "@yakad/ui";

export interface XTrProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement<XThProps> | Array<ReactElement<XThProps>>;
}
export function XTr(props: XTrProps) {
    return <Tr>XTr can only be used inside XThead | XTbody | XTfoot</Tr>;
}

export interface XThProps extends React.HTMLAttributes<HTMLElement> {
    alignText?: "start" | "center" | "end";
    sortable?: boolean;
    searchable?: boolean;
    defaultHidden?: boolean;
}
export function XTh(props: XThProps) {
    return <Th>XTh can only be used inside XTr witch inside XThead</Th>;
}

export interface XTdProps extends React.HTMLAttributes<HTMLElement> {}
export function XTd(props: XTdProps) {
    return <Td>XTd can only be used inside XTr witch inside XTbody</Td>;
}

export type AcceptedFootFuncs = "sum" | "average" | "count";
export interface XTfProps extends React.HTMLAttributes<HTMLElement> {
    footFunc?: AcceptedFootFuncs;
}
export function XTf(props: XTfProps) {
    return <Th>XTf can only be used inside XTr witch inside XTfoot</Th>;
}
