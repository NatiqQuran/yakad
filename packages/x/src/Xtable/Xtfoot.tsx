import React, { Children, ReactElement, forwardRef } from "react";
import { Td, Tfoot, TfootProps, Tr } from "@yakad/ui";
import { XTrProps, XTfProps, AcceptedFootFuncs } from "./Xtrhdf";

export interface XTfootProps extends TfootProps {
    children: ReactElement<XTrProps>;
}

const XTfoot = forwardRef<HTMLTableSectionElement, XTfootProps>(
    ({ children, ...restProps }, ref) => {
        const ChildXTr: ReactElement<XTrProps> = children;

        const ChildsXTf = Children.toArray(ChildXTr.props.children);

        const footFuncsList: (AcceptedFootFuncs | undefined)[] = (
            ChildsXTf as Array<ReactElement<XTfProps>>
        ).map((ChildXTf) => ChildXTf.props.footFunc);

        return (
            <Tfoot ref={ref} {...restProps}>
                <Tr {...ChildXTr.props}>
                    {(ChildsXTf as ReactElement<XTfProps>[]).map(
                        (ChildXTf, index) => (
                            <Td key={index} {...ChildXTf.props}>
                                {ChildXTf.props.children}
                                {ChildXTf.props.children &&
                                    ChildXTf.props.footFunc &&
                                    " | "}
                                {ChildXTf.props.footFunc
                                    ? ChildXTf.props.footFunc
                                    : null}
                            </Td>
                        )
                    )}
                </Tr>
            </Tfoot>
        );
    }
);

export default XTfoot;
