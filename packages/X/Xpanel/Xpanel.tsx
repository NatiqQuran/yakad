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
import { useMedia } from "@yakad/lib";

import { ReactComponent as Menu } from "../assets/svg/menu.svg";
import { ReactComponent as Close } from "../assets/svg/close.svg";

interface menuItemChild {
    name: string;
    onclick?: MouseEventHandler<HTMLButtonElement>;
}
interface menuItem {
    name: string;
    onclick?: MouseEventHandler<HTMLButtonElement>;
    childs?: menuItemChild[];
}

interface NavigationListProps extends React.HTMLAttributes<HTMLElement> {
    menuItems?: menuItem[];
    menuItemsChild?: menuItemChild[];
}

interface XpanelProps extends React.HTMLAttributes<HTMLElement> {
    name?: string;
    menuItems?: menuItem[];
    menuItemsChild?: menuItemChild[];
}

interface CollapseList {
    [n: number]: boolean;
}

function NavigationList(props: NavigationListProps) {
    const [collapsedList, setcollapsedList] = React.useState<CollapseList>({});

    const handleClickcollapseList = (index: number) =>
        setcollapsedList(object => ({ [index]: object[index] ? !object[index] : false, ...object }));

    return (
        <List direction="column">
            {props.menuItems
                ? props.menuItems.map((item, index) => (
                    <ListItem>
                        <Button
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
                        <List collapsed={collapsedList[index]}>
                            {item.childs
                                ? item.childs.map((child) => (
                                    <ListItem>
                                        <Button onClick={child.onclick}>
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
                <Button icon={<Menu />} onClick={toggleNavOpen} />

                <h1>{props.name}</h1>
            </AppBar>
            <Main onClick={() => setNavOpen(false)}>{props.children}</Main>

            <Navigation open={navOpen}>
                <Button
                    onClick={toggleNavOpen}
                    icon={<Close />}
                    style={{ marginRight: "0.5rem" }}
                />
                <NavigationList menuItems={props.menuItems} />
            </Navigation>
        </Page>
    );
}
export default Xpanel;
