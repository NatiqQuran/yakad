import React, { Children, ReactElement } from "react";
import { joinClassNames } from "@yakad/lib";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Button,
    Row,
} from "../../../packages/ui";
import Symbol from "@yakad/symbols";
import styles from "./Xtable.module.css";
import { XtColumnProps } from "../XtColumn/XtColumn";

interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
    data?: any[];
    children: ReactElement<XtColumnProps> | Array<ReactElement<XtColumnProps>>;
}

export default function Xtable(props: TableProps) {
    const joinedClassNames = joinClassNames(props.className!);

    const arrayChildren = Children.toArray(props.children);

    const listOfXtColumns: XtColumnProps[] = arrayChildren.map(
        (child: React.ReactElement<XtColumnProps>) => ({
            dataKey: child.props.dataKey,
            alignText: child.props.alignText,
            defaultHidden: child.props.defaultHidden,
        })
    );

    let haveFooter: boolean = arrayChildren.some(
        (child: React.ReactElement) => {
            if (child.props.footTitle || child.props.footFunc) return true;
        }
    );

    const collectedDataKeys = props.data ? Object.keys(props.data[0]) : null;

    return props.children ? (
        <Table style={props.style} className={joinedClassNames}>
            <Thead>
                <Tr>
                    {arrayChildren.map((child: React.ReactElement) => (
                        <Th className={styles.th}>
                            <Row>
                                <div style={{ marginInlineEnd: "0.5rem" }}>
                                    {child.props.headTitle
                                        ? child.props.headTitle
                                        : "[" + child.props.dataKey + "]"}
                                </div>
                                {child.props.sortable ? (
                                    <Button
                                        className={styles.button}
                                        size="small"
                                        icon={<Symbol icon="sort" />}
                                    />
                                ) : null}
                                {child.props.searchable ? (
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
                              {listOfXtColumns?.map((cell) => (
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
                    {arrayChildren?.map((child: React.ReactElement) => (
                        <Th
                            style={{
                                textAlign: child.props.alignText
                                    ? child.props.alignText
                                    : "start",
                            }}
                        >
                            {child.props.footTitle
                                ? child.props.footTitle + " "
                                : null}
                            {child.props.footFunc ? child.props.footFunc : null}
                        </Th>
                    ))}
                </Tfoot>
            ) : null}
        </Table>
    ) : (
        <Table style={props.style} className={joinedClassNames}>
            <Thead>
                <Tr>
                    {collectedDataKeys?.map((key) => (
                        <Th>{"[" + key + "]"}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {props.data
                    ? props.data.map((row) => (
                          <Tr>
                              {collectedDataKeys?.map((cell) => (
                                  <Td>{row[cell]}</Td>
                              ))}
                          </Tr>
                      ))
                    : "No data"}
            </Tbody>
        </Table>
    );
}

interface FastDataViewTableProps {
    ElementProps: any;
}
function FastDataViewTable() {}
