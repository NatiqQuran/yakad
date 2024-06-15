"use client";

import React, { MouseEventHandler, useEffect, useState } from "react";
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

export default function Xpanel(props: XpanelProps) {
    const [navOpen, setNavOpen] = React.useState<boolean>(false);
    const toggleNavOpen = () => setNavOpen((value) => !value);

    const handleNavDependOnWindowSize = () => {
        if (window.innerWidth <= 1200) {
            setNavOpen(false);
        } else {
            setNavOpen(true);
        }
    };
    useEffect(() => {
        window.addEventListener("resize", handleNavDependOnWindowSize);
        handleNavDependOnWindowSize();
    });

    return (
        <Page>
            <AppBar positionSticky>
                <Button icon="menu" onClick={toggleNavOpen} />
                <h1>{props.name ? props.name : "Panel"}</h1>
                <Spacer />
                {props.appbarChildren}
            </AppBar>
            <Main
                style={{
                    minHeight: "calc(100vh - 5rem)",
                }}
                navOpen={navOpen}
                onClick={() => setNavOpen(false)}
            >
                {props.children as any}
            </Main>

            <Navigation open={navOpen}>
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
