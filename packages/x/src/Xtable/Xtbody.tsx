import React, { ReactElement } from "react";
import { Tbody, Td, Tr } from "@yakad/ui";
import { XTrProps, XTdProps } from "./Xtrhdf";

export interface XTbodyProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement<XTrProps> | Array<ReactElement<XTrProps>>;
}
export default function XTbody(props: XTbodyProps) {
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
