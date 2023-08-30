"use client";

import {
    AppBar,
    Button,
    List,
    ListItem,
    Main,
    Navigation,
    Page,
    Spacer,
} from "@yakad/ui";

import React, { MouseEventHandler, useState } from "react";

//import { ReactComponent as Menu } from "../assets/svg/menu.svg";
//import { ReactComponent as Close } from "../assets/svg/close.svg";

interface MenuItemChild {
    name: string;
    onclick?: MouseEventHandler<HTMLButtonElement>;
    selected?: boolean;
}
interface MenuItem {
    name: string;
    onclick?: MouseEventHandler<HTMLButtonElement>;
    childs?: MenuItemChild[];
    selected?: boolean;
}

interface NavigationListProps extends React.HTMLAttributes<HTMLElement> {
    menuItems?: MenuItem[];
    menuItemsChild?: MenuItemChild[];
}

interface XpanelProps extends React.HTMLAttributes<HTMLElement> {
    name?: string;
    menuItems?: MenuItem[];
}

interface CollapseList {
    [n: number]: boolean;
}

function NavigationList(props: NavigationListProps) {
    const [collapsedList, setcollapsedList] = React.useState<CollapseList>({});

    const handleClickcollapseList = (index: number) =>
        setcollapsedList((object) => ({
            ...object,
            [index]: object[index] ? !object[index] : true,
        }));

    return (
        <List direction="column">
            {props.menuItems
                ? props.menuItems.map((item, index) => (
                    <ListItem key={index}>
                        <Button
                            variant={item.selected ? "tonal" : "text"}
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
                        <List collapsed={collapsedList[index] ? false : true} key={index}>
                            {item.childs
                                ? item.childs.map((child) => (
                                    <ListItem>
                                        <Button size="small" variant={child.selected ? "tonal" : "text"} onClick={child.onclick}>
                                            {child.name}
                                        </Button>
                                    </ListItem>
                                ))
                                : null}
                        </List>
                    </ListItem>
                ))
                : "No menu items"}
        </List>
    );
}

function Xpanel(props: XpanelProps) {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const toggleNavOpen = () => setNavOpen((value) => !value);

    return (
        <Page>
            <AppBar>
                <Button onClick={toggleNavOpen} icon={<Menu />} />

                <h1>{props.name}</h1>
            </AppBar>
            <Main onClick={() => setNavOpen(false)}>{props.children}</Main>

            <Navigation open={navOpen}>
                <Button
                    onClick={toggleNavOpen}
                    style={{ marginRight: "0.5rem" }}
                />
                <NavigationList menuItems={props.menuItems} />
            </Navigation>
        </Page>
    );
}
export default Xpanel;
