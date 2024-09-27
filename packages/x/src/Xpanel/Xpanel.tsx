"use client";

import React, { useEffect } from "react";
import { AppBar, Button, Main, Navigation, Page, Spacer } from "@yakad/ui";
import Symbol from "@yakad/symbols";

interface XpanelProps extends React.HTMLAttributes<HTMLElement> {
    name?: string;
    appbarChildren?: JSX.Element;
    navigationChildren?: JSX.Element;
}

export default function Xpanel(props: XpanelProps) {
    const [mounted, setMounted] = React.useState<boolean>(false);
    const [navOpen, setNavOpen] = React.useState<boolean>(false);
    const toggleNavOpen = () => setNavOpen((value) => !value);

    const handleClickAwayNav = () => {
        window.innerWidth <= 1000 ? setNavOpen(false) : null;
    };

    const handleNavOpenDependOnWindowSize = () => {
        setNavOpen(window.innerWidth <= 1200 ? false : true), setMounted(true);
    };

    useEffect(() => {
        window.addEventListener("resize", handleNavOpenDependOnWindowSize);
        !mounted ? handleNavOpenDependOnWindowSize() : null;
        setMounted(true);
    }, []);

    return (
        <Page>
            <AppBar positionSticky>
                <Button icon={<Symbol icon="menu" />} onClick={toggleNavOpen} />
                <h1>{props.name ? props.name : "Panel"}</h1>
                <Spacer />
                {props.appbarChildren}
            </AppBar>
            <Main
                style={{
                    minHeight: "calc(100vh - 6rem)",
                }}
                navOpen={navOpen}
                onClick={() => handleClickAwayNav()}
            >
                {props.children as any}
            </Main>

            <Navigation open={navOpen}>{props.navigationChildren}</Navigation>
        </Page>
    );
}
