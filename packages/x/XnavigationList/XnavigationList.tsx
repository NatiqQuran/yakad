import { Button, List, ListItem, Spacer } from "@yakad/ui";
import React, { MouseEventHandler } from "react";

interface MenuItem {
    name: string;
    onclick?: MouseEventHandler<HTMLButtonElement>;
    childs?: MenuItemChild[];
    selected?: boolean;
}

interface MenuItemChild {
    name: string;
    onclick?: MouseEventHandler<HTMLButtonElement>;
    selected?: boolean;
}

interface XnavigationListProps extends React.HTMLAttributes<HTMLElement> {
    menuItems?: MenuItem[];
}

interface CollapseList {
    [n: number]: boolean;
}
export default function XnavigationList(props: XnavigationListProps) {
    const [collapsedList, setcollapsedList] = React.useState<CollapseList>({});

    const handleClickcollapseList = (index: number) =>
        setcollapsedList((object) => ({
            ...object,
            [index]: object[index] ? !object[index] : true,
        }));

    return (
        <List direction="column">
            {props.menuItems ? (
                props.menuItems.map((item, index) => (
                    <ListItem key={index}>
                        <Button
                            variant={
                                item.selected
                                    ? "filled"
                                    : collapsedList[index]
                                        ? "elevated"
                                        : "text"
                            }
                            borderStyle="semi"
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
                            direction="column"
                            collapsed={collapsedList[index] ? false : true}
                            key={index}
                            style={{
                                marginInlineStart: "1rem",
                                marginBottom: "0.5rem",
                                borderInlineStart: "0.1rem solid #72727272",
                            }}
                        >
                            {item.childs
                                ? item.childs.map((child) => (
                                    <ListItem>
                                        <Button
                                            size="small"
                                            borderStyle="semi"
                                            variant={
                                                child.selected
                                                    ? "filled"
                                                    : "text"
                                            }
                                            onClick={child.onclick}
                                        >
                                            {child.name}
                                        </Button>
                                    </ListItem>
                                ))
                                : null}
                        </List>
                    </ListItem>
                ))
            ) : (
                <h3>No menu items</h3>
            )}
        </List>
    );
}
