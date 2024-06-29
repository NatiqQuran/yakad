import React from "react";
import { joinClassNames } from "@yakad/lib";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, Button } from "@yakad/ui";
import Symbol from "@yakad/symbols";
import styles from "./Xtable.module.css";

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    head?: any;
    data?: any[];
    foot?: any;
}

export default function Xtable(props: TableProps) {
    const joinedClassNames = joinClassNames(props.className!);

    const dataKeys = props.data ? Object.keys(props.data[0]) : null;
    const headKeys = props.head ? Object.keys(props.head) : dataKeys;
    const footKeys = props.foot ? Object.keys(props.foot) : headKeys;

    return (
        <Table style={props.style} className={joinedClassNames}>
            <Thead>
                <Tr>
                    {headKeys?.map((item) => (
                        <Th className={styles.th}>
                            <div style={{ marginInlineEnd: "0.5rem" }}>
                                {props.head ? props.head[item] : item}
                            </div>
                            <Button
                                className={styles.button}
                                size="small"
                                icon={<Symbol icon="sort" />}
                            />
                            <Button
                                className={styles.button}
                                size="small"
                                icon={<Symbol icon="sort" />}
                            />
                        </Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {props.data
                    ? props.data.map((row) => (
                          <Tr>
                              {headKeys?.map((cell) => (
                                  <Td>{row[cell]}</Td>
                              ))}
                          </Tr>
                      ))
                    : "No data"}
            </Tbody>
            {props.foot ? (
                <Tfoot>
                    <Tr>
                        {headKeys?.map((cell) => (
                            <Th>{props.foot[cell]}</Th>
                        ))}
                    </Tr>
                </Tfoot>
            ) : null}
        </Table>
    );
}
