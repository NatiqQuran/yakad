import { joinClassNames } from "@yakad/lib";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from "@yakad/ui";

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    head?: any;
    data?: any[];
    foot?: any;
}

export default function Table(props: TableProps) {
    const joinedClassNames = joinClassNames(styles.table, props.className!);

    const headKeys = props.head ? Object.keys(props.head) : null;
    const dataKeys = props.data ? Object.keys(props.data[0]) : null;
    const footKeys = props.foot ? Object.keys(props.foot) : null;

    return (
        <Table {...props} className={joinedClassNames}>
            <Thead>
                <Tr>
                    {props.head
                        ? headKeys?.map((cell) => <Th>{props.head[cell]}</Th>)
                        : dataKeys?.map((cell) => <Th>{cell}</Th>)}
                </Tr>
            </Thead>
            <Tbody>
                {props.data
                    ? props.data.map((row) => (
                          <Tr>
                              {props.head
                                  ? headKeys?.map((cell) => (
                                        <Td>{row[cell]}</Td>
                                    ))
                                  : dataKeys?.map((cell) => (
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
