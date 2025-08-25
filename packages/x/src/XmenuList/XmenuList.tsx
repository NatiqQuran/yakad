import { forwardRef, useState } from "react";
import { Button, List, ListItem, ListProps, Spacer } from "@yakad/ui";

interface MenuItem {
    name: string;
    onclick?: () => void;
    childs?: Omit<MenuItem, "childs">[];
    selected?: boolean;
}

export interface XmenuListProps extends Omit<ListProps, "children"> {
    items: MenuItem[];
}

export const XmenuList = forwardRef<HTMLUListElement, XmenuListProps>(
    ({ items, direction = "column", ...restProps }, ref) => {
        const [collapsedList, setCollapsedList] = useState<{
            [n: number]: boolean;
        }>({});

        const handleClickcollapseList = (index: number) =>
            setCollapsedList((prev) => ({
                ...prev,
                [index]: prev[index] ? !prev[index] : true,
            }));

        return (
            <List ref={ref} direction={direction} {...restProps}>
                {items.map((item, index) => (
                    <ListItem key={index}>
                        <Button
                            variant={
                                item.selected
                                    ? "filled"
                                    : collapsedList[index]
                                    ? "elevated"
                                    : "text"
                            }
                            borderstyle="semi"
                            onClick={
                                item.childs
                                    ? () => handleClickcollapseList(index)
                                    : item.onclick
                            }
                        >
                            {item.name}
                            <Spacer />
                        </Button>
                        <List
                            key={index}
                            direction="column"
                            collapsed={!collapsedList[index]}
                            style={{
                                marginInlineStart: "1rem",
                                marginBottom: "0.5rem",
                                borderInlineStart: "0.1rem solid #72727272",
                            }}
                        >
                            {item.childs?.map((child, childIndex) => (
                                <ListItem key={childIndex}>
                                    <Button
                                        size="small"
                                        borderstyle="semi"
                                        variant={
                                            child.selected ? "filled" : "text"
                                        }
                                        onClick={child.onclick}
                                    >
                                        {child.name}
                                    </Button>
                                </ListItem>
                            ))}
                        </List>
                    </ListItem>
                ))}
            </List>
        );
    }
);
XmenuList.displayName = "XmenuList";
