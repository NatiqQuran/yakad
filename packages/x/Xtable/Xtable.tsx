import React, { Children, ReactElement } from "react";
import { joinClassNames } from "@yakad/lib";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, Button, Row } from "@yakad/ui";
import Symbol from "@yakad/symbols";
import styles from "./Xtable.module.css";
import { XtColumnProps } from "../XtColumn/XtColumn";

interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
    data?: any[];
    children: ReactElement<XtColumnProps> | Array<ReactElement<XtColumnProps>>;
}

export default function Xtable(props: TableProps) {
    const arrayChildren = Children.toArray(props.children);

    const xtColumns: XtColumnProps[] = arrayChildren.map(
        (child: React.ReactElement<XtColumnProps>) => ({
            dataKey: child.props.dataKey,
            headTitle: child.props.headTitle,
            footTitle: child.props.footTitle,
            footFunc: child.props.footFunc,
            alignText: child.props.alignText,
            sortable: child.props.sortable,
            searchable: child.props.searchable,
            defaultHidden: child.props.defaultHidden,
        })
    );

    let haveFooter: boolean = xtColumns.some((child: XtColumnProps) => {
        if (child.footTitle || child.footFunc) return true;
    });

    return props.children ? (
        <Table {...props}>
            <Thead>
                <Tr>
                    {xtColumns.map((child: XtColumnProps) => (
                        <Th className={styles.th}>
                            <Row>
                                <div style={{ marginInlineEnd: "0.5rem" }}>
                                    {child.headTitle
                                        ? child.headTitle
                                        : "[" + child.dataKey + "]"}
                                </div>
                                {child.sortable ? (
                                    <Button
                                        className={styles.button}
                                        size="small"
                                        icon={<Symbol icon="sort" />}
                                    />
                                ) : null}
                                {child.searchable ? (
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
                {props.data
                    ? props.data.map((row) => (
                          <Tr>
                              {xtColumns.map((cell) => (
                                  <Td
                                      style={{
                                          textAlign: cell.alignText
                                              ? cell.alignText
                                              : "start",
                                      }}
                                  >
                                      {row[cell.dataKey]}
                                  </Td>
                              ))}
                          </Tr>
                      ))
                    : "No data"}
            </Tbody>
            {haveFooter ? (
                <Tfoot>
                    {xtColumns.map((child: XtColumnProps) => (
                        <Th
                            style={{
                                textAlign: child.alignText
                                    ? child.alignText
                                    : "start",
                            }}
                        >
                            {child.footTitle ? child.footTitle + " " : null}
                            {child.footFunc ? child.footFunc : null}
                        </Th>
                    ))}
                </Tfoot>
            ) : null}
        </Table>
    ) : (
        <XtableLiteView {...props} data={props.data} />
    );
}

interface XtableLiteViewProps extends React.HTMLAttributes<HTMLDivElement> {
    data: any[];
}
function XtableLiteView(props: XtableLiteViewProps) {
    const dataKeys = props.data ? Object.keys(props.data[0]) : null;

    return (
        <Table {...props}>
            <Thead>
                <Tr>
                    {dataKeys?.map((key) => (
                        <Th>{"[" + key + "]"}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {props.data
                    ? props.data.map((row) => (
                          <Tr>
                              {dataKeys?.map((cell) => (
                                  <Td>{row[cell]}</Td>
                              ))}
                          </Tr>
                      ))
                    : "No data"}
            </Tbody>
        </Table>
    );
}
