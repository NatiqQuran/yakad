"use client";

import React, { MouseEventHandler, useState } from "react";
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
import Symbol from "@yakad/symbols";

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

interface NavigationListProps extends React.HTMLAttributes<HTMLElement> {
    menuItems?: MenuItem[];
}

interface XpanelProps extends React.HTMLAttributes<HTMLElement> {
    name?: string;
    menuItems?: MenuItem[];
    appbarChildren?: JSX.Element;
}

interface CollapseList {
    [n: number]: boolean;
}

const DEFAULT_NAV_OPEN_STATE = true;

export default function Xpanel(props: XpanelProps) {
    const [navOpen, setNavOpen] = React.useState<boolean>(
        DEFAULT_NAV_OPEN_STATE
    );

    const toggleNavOpen = () => setNavOpen((value) => !value);

    return (
        <Page>
            <AppBar positionSticky>
                <Button icon={<Symbol icon="menu" />} onClick={toggleNavOpen} />
                <h1>{props.name ? props.name : "Panel"}</h1>
                <Spacer />
                {props.appbarChildren}
            </AppBar>
            <Main navOpen={navOpen} onClick={() => setNavOpen(false)}>
                {props.children}
            </Main>

            <Navigation open={navOpen}>
                <Button
                    icon={<Symbol icon="close" />}
                    onClick={toggleNavOpen}
                    style={{ marginRight: "0.5rem" }}
                />
                <NavigationList menuItems={props.menuItems} />
            </Navigation>
        </Page>
    );
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
            {props.menuItems ? (
                props.menuItems.map((item, index) => (
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
                        <List
                            direction="column"
                            collapsed={collapsedList[index] ? false : true}
                            key={index}
                        >
                            {item.childs
                                ? item.childs.map((child) => (
                                      <ListItem>
                                          <Button
                                              style={{
                                                  marginInlineStart: "1rem",
                                              }}
                                              size="small"
                                              borderStyle="semi"
                                              variant={
                                                  child.selected
                                                      ? "tonal"
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
