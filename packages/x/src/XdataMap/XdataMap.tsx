import { forwardRef } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@yakad/ui";

interface RowData {
    [key: string]: string | number | boolean | any;
}

export interface XdataMapProps
    extends Omit<React.TableHTMLAttributes<HTMLTableElement>, "children"> {
    data: RowData[];
}

const XdataMap = forwardRef<HTMLTableElement, XdataMapProps>(
    ({ data, ...restProps }, ref) => {
        const dataKeys: string[] = Object.keys(data[0]);

        return (
            <Table ref={ref} {...restProps}>
                <Thead>
                    <Tr>
                        {dataKeys?.map((key) => (
                            <Th key={key}>
                                {key.replace("_", " ").toUpperCase()}
                            </Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((row, index) => (
                        <Tr key={index}>
                            {dataKeys?.map((cell) => (
                                <Td key={cell}>
                                    {typeof row[cell] === "object" ? (
                                        <pre>
                                            {JSON.stringify(row[cell], null, 2)}
                                        </pre>
                                    ) : (
                                        row[cell]
                                    )}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        );
    }
);

export default XdataMap;
