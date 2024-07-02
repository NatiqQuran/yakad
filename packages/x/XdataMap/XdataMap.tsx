import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@yakad/ui";

interface XdataMapProps extends React.HTMLAttributes<HTMLElement> {
    data: any[];
}

export default function XdataMap(props: XdataMapProps) {
    const dataKeys: string[] = props.data ? Object.keys(props.data[0]) : null;

    return (
        <Table {...props}>
            <Thead>
                <Tr>
                    {dataKeys?.map((key) => (
                        <Th>{"[" + key.toUpperCase + "]"}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {props.data.map((row) => (
                    <Tr>
                        {dataKeys?.map((cell) => (
                            <Td>{row[cell]}</Td>
                        ))}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}
