import React, { ReactElement } from "react";
import {
    Button,
    Row,
    Spacer,
    Table,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";
import styles from "./Xtable.module.css";

interface XTableProps extends React.HTMLAttributes<HTMLElement> {}
export function XTable(props: XTableProps) {
    return <Table {...props}>{props.children as React.ReactNode}</Table>;
}

/////////////////////////////////////////////////////////////////////////////////Thead

interface XTheadProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement<XTrProps>;
}
export function XThead(props: XTheadProps) {
    const ChildAsXTr: ReactElement<XTrProps> = props.children;

    const ChildsAsXTh = React.Children.toArray(ChildAsXTr.props.children);

    return (
        <Thead {...props}>
            <Tr {...ChildAsXTr.props}>
                {(ChildsAsXTh as Array<ReactElement<XThProps>>).map(
                    (ChildAsXTh) => (
                        <Th {...ChildAsXTh.props}>
                            <Row className={styles.xthRow}>
                                <div>{ChildAsXTh.props.children}</div>
                                {ChildAsXTh.props.sortable ? (
                                    <Button
                                        className={styles.button}
                                        size="small"
                                        icon={<Symbol icon="sort" />}
                                    />
                                ) : null}
                                {ChildAsXTh.props.searchable ? (
                                    <Button
                                        className={styles.button}
                                        size="small"
                                        icon={<Symbol icon="search" />}
                                    />
                                ) : null}
                                <Spacer />
                                <Button
                                    className={styles.button}
                                    size="small"
                                    icon={<Symbol icon="more_vert" />}
                                />
                            </Row>
                        </Th>
                    )
                )}
            </Tr>
        </Thead>
    );
}

/////////////////////////////////////////////////////////////////////////////////Tbody

interface XTbodyProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement<XTrProps> | Array<ReactElement<XTrProps>>;
}
export function XTbody(props: XTbodyProps) {
    const ChildsAsXTr = React.Children.toArray(props.children);

    return (
        <Tbody {...props}>
            {(ChildsAsXTr as Array<ReactElement<XTrProps>>).map(
                (ChildAsXTr) => (
                    <Tr {...ChildAsXTr.props}>
                        {(
                            React.Children.toArray(
                                ChildAsXTr.props.children
                            ) as Array<ReactElement<XTdProps>>
                        ).map((ChildAsXTd) => (
                            <Td {...ChildAsXTd.props}>
                                {ChildAsXTd.props.children}
                            </Td>
                        ))}
                    </Tr>
                )
            )}
        </Tbody>
    );
}

/////////////////////////////////////////////////////////////////////////////////Tfoot

interface XTfootProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement<XTrProps>;
}
export function XTfoot(props: XTfootProps) {
    const ChildAsXTr: ReactElement<XTrProps> = props.children;

    const ChildsAsXTf = React.Children.toArray(ChildAsXTr.props.children);

    const footFuncList = (ChildsAsXTf as Array<ReactElement<XTfProps>>).map(
        (ChildAsXTf) => ChildAsXTf.props.footFunc
    );

    return (
        <Tfoot {...props}>
            <Tr {...ChildAsXTr.props}>
                {(ChildsAsXTf as Array<ReactElement<XTfProps>>).map(
                    (ChildAsXTf) => (
                        <Td {...ChildAsXTf.props}>
                            {ChildAsXTf.props.children}
                            {ChildAsXTf.props.children &&
                            ChildAsXTf.props.footFunc
                                ? " | "
                                : null}
                            {ChildAsXTf.props.footFunc
                                ? ChildAsXTf.props.footFunc
                                : null}
                        </Td>
                    )
                )}
            </Tr>
            <Tr>
                {footFuncList.map((z) => (
                    <Td>{z}</Td>
                ))}
            </Tr>
        </Tfoot>
    );
}

/////////////////////////////////////////////////////////////////////////////////Row

interface XTrProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement<XThProps> | Array<ReactElement<XThProps>>;
}
export function XTr(props: XTrProps) {
    return <Tr>XTr can only be used inside XThead | XTbody | XTfoot</Tr>;
}

/////////////////////////////////////////////////////////////////////////////////Cells

interface XThProps extends React.HTMLAttributes<HTMLElement> {
    alignText?: "start" | "center" | "end";
    sortable?: boolean;
    searchable?: boolean;
    defaultHidden?: boolean;
}
export function XTh(props: XThProps) {
    return <Th>XTh can only be used inside XTr witch inside XThead</Th>;
}

interface XTdProps extends React.HTMLAttributes<HTMLElement> {}
export function XTd(props: XTdProps) {
    return <Td>XTd can only be used inside XTr witch inside XTbody</Td>;
}

interface XTfProps extends React.HTMLAttributes<HTMLElement> {
    footFunc?: "sum" | "average";
}
export function XTf(props: XTfProps) {
    return <Th>XTf can only be used inside XTr witch inside XTfoot</Th>;
}
