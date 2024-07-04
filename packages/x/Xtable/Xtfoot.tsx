import React, { ReactElement } from "react";
import { Td, Tfoot, Tr } from "@yakad/ui";
import { XTrProps, XTfProps, AcceptedFootFuncs } from "./Xtrhdf";

export interface XTfootProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement<XTrProps>;
}
export default function XTfoot(props: XTfootProps) {
    const ChildAsXTr: ReactElement<XTrProps> = props.children;

    const ChildsAsXTf = React.Children.toArray(ChildAsXTr.props.children);

    const footFuncsList: (AcceptedFootFuncs | undefined)[] = (
        ChildsAsXTf as Array<ReactElement<XTfProps>>
    ).map((ChildAsXTf) => ChildAsXTf.props.footFunc);

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
        </Tfoot>
    );
}
