"use client";

import React, { ReactElement, useState } from "react";
import { Button, Row, Spacer, Th, Thead, Tr } from "@yakad/ui";
import Symbol from "@yakad/symbols";
import { XTrProps, XThProps } from "./Xtrhdf";
import styles from "./Xtable.module.css";

interface Sort {
    index: number;
    order: "ASC" | "DESC";
}
interface Search {
    index: number;
    phrase: string;
}
export interface XTheadProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement<XTrProps>;
}
export default function XThead(props: XTheadProps) {
    const [sort, setSort] = useState<Sort>();
    const [search, setSearch] = useState<Search>();

    const setSortHandler = (index: number) => {
        sort && sort.index == index
            ? sort.order == "ASC"
                ? setSort({ index: index, order: "DESC" })
                : setSort({ index: index, order: "ASC" })
            : setSort({ index: index, order: "ASC" });
    };

    const ChildAsXTr: ReactElement<XTrProps> = props.children;

    const ChildsAsXTh = React.Children.toArray(ChildAsXTr.props.children);

    return (
        <Thead {...props}>
            <Tr {...ChildAsXTr.props}>
                {(ChildsAsXTh as Array<ReactElement<XThProps>>).map(
                    (ChildAsXTh: ReactElement<XThProps>, index: number) => (
                        <Th {...ChildAsXTh.props}>
                            <Row className={styles.xthRow}>
                                <div>{ChildAsXTh.props.children}</div>
                                {ChildAsXTh.props.sortable ? (
                                    <Button
                                        className={
                                            sort && sort.index != index
                                                ? styles.showOnHover
                                                : ""
                                        }
                                        size="small"
                                        icon={
                                            <Symbol
                                                icon="sort"
                                                mirror={
                                                    sort &&
                                                    sort.index == index &&
                                                    sort.order == "DESC"
                                                        ? undefined
                                                        : "horizontal"
                                                }
                                            />
                                        }
                                        onClick={() => setSortHandler(index)}
                                    />
                                ) : null}
                                {ChildAsXTh.props.searchable ? (
                                    <Button
                                        className={
                                            search && search.index != index
                                                ? styles.showOnHover
                                                : ""
                                        }
                                        size="small"
                                        icon={<Symbol icon="search" />}
                                        onClick={() =>
                                            setSearch({
                                                index: index,
                                                phrase: "test",
                                            })
                                        }
                                    />
                                ) : null}
                                <Spacer />
                                <Button
                                    className={styles.showOnHover}
                                    size="small"
                                    icon={<Symbol icon="more_vert" />}
                                />
                            </Row>
                        </Th>
                    )
                )}
            </Tr>
        </Thead>
    );
}
