import React, { Children, ReactElement } from "react";
import { joinClassNames } from "@yakad/lib";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, Button, Row } from "@yakad/ui";
import Symbol from "@yakad/symbols";
import styles from "./Xtable.module.css";
import { XtColumnProps } from "../XtColumn/XtColumn";

interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
    data: any[];
    children: ReactElement<XtColumnProps> | Array<ReactElement<XtColumnProps>>;
}

export default function Xtable(props: TableProps) {
    const arrayChildren = Children.toArray(props.children);

    const xtColumnsData: XtColumnProps[] = (
        arrayChildren as Array<ReactElement<XtColumnProps>>
    ).map((child: ReactElement<XtColumnProps>) => ({
        dataKey: child.props.dataKey,
        headTitle: child.props.headTitle,
        footTitle: child.props.footTitle,
        footFunc: child.props.footFunc,
        alignText: child.props.alignText,
        sortable: child.props.sortable,
        searchable: child.props.searchable,
        defaultHidden: child.props.defaultHidden,
    }));

    let haveFooter: boolean = xtColumnsData.some((item: XtColumnProps) => {
        if (item.footTitle || item.footFunc) return true;
    });

    return (
        <Table {...props}>
            <Thead>
                <Tr>
                    {xtColumnsData.map((item: XtColumnProps) => (
                        <Th className={styles.th}>
                            <Row>
                                <div style={{ marginInlineEnd: "0.5rem" }}>
                                    {item.headTitle
                                        ? item.headTitle
                                        : "[" + item.dataKey + "]"}
                                </div>
                                {item.sortable ? (
                                    <Button
                                        className={styles.button}
                                        size="small"
                                        icon={<Symbol icon="sort" />}
                                    />
                                ) : null}
                                {item.searchable ? (
                                    <Button
                                        className={styles.button}
                                        size="small"
                                        icon={<Symbol icon="search" />}
                                    />
                                ) : null}
                            </Row>
                        </Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {props.data.map((row) => (
                    <Tr>
                        {xtColumnsData.map((item) => (
                            <Td
                                style={{
                                    textAlign: item.alignText
                                        ? item.alignText
                                        : "start",
                                }}
                            >
                                {row[item.dataKey]}
                            </Td>
                        ))}
                    </Tr>
                ))}
            </Tbody>
            {haveFooter ? (
                <Tfoot>
                    {xtColumnsData.map((item: XtColumnProps) => (
                        <Th
                            style={{
                                textAlign: item.alignText
                                    ? item.alignText
                                    : "start",
                            }}
                        >
                            {item.footTitle ? item.footTitle + " " : null}
                            {item.footFunc ? item.footFunc : null}
                        </Th>
                    ))}
                </Tfoot>
            ) : null}
        </Table>
    );
}
