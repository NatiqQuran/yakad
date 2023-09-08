import { joinClassNames } from "@yakad/lib";
import styles from "./Xtable.module.css";

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
        <table {...props} className={joinedClassNames}>
            <thead>
                <tr>
                    {props.head
                        ? headKeys?.map((cell) => <th>{props.head[cell]}</th>)
                        : dataKeys?.map((cell) => <th>{cell}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.data
                    ? props.data.map((row) => (
                          <tr>
                              {props.head
                                  ? headKeys?.map((cell) => (
                                        <td>{row[cell]}</td>
                                    ))
                                  : dataKeys?.map((cell) => (
                                        <td>{row[cell]}</td>
                                    ))}
                          </tr>
                      ))
                    : "No data"}
            </tbody>
            {props.foot ? (
                <tfoot>
                    <tr>
                        {headKeys?.map((cell) => (
                            <th>{props.foot[cell]}</th>
                        ))}
                    </tr>
                </tfoot>
            ) : null}
        </table>
    );
}
