"use client";

import { forwardRef, useEffect } from "react";
import {
    AppBar,
    Button,
    Main,
    Navigation,
    Screen,
    ScreenProps,
    Spacer,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";

export interface XpanelProps extends ScreenProps {
    name?: string;
    appbarchildren?: React.ReactNode;
    navigationchildren?: React.ReactNode;
    children?: React.ReactNode;
}

const Xpanel = forwardRef<HTMLDivElement, XpanelProps>(
    (
        {
            name = "Yakad Panel",
            appbarchildren,
            navigationchildren,
            children,
            ...restProps
        },
        ref
    ) => {
        const [navOpen, setNavOpen] = React.useState<boolean>(false);
        const toggleNavOpen = () => setNavOpen((prev) => !prev);

        const handleClickAwayNav = () =>
            window.innerWidth <= 1000 && setNavOpen(false);

        const handleNavOpenDependOnWindowSize = () =>
            setNavOpen(window.innerWidth > 1200);

        useEffect(() => {
            handleNavOpenDependOnWindowSize();
            const resizeListener = () => handleNavOpenDependOnWindowSize();
            window.addEventListener("resize", resizeListener);
            return () => {
                window.removeEventListener("resize", resizeListener);
            };
        }, []);

        return (
            <Screen ref={ref} {...restProps}>
                <AppBar sticky>
                    <Button
                        icon={<Symbol icon="menu" />}
                        onClick={toggleNavOpen}
                    />
                    <h1>{name}</h1>
                    <Spacer />
                    {appbarchildren}
                </AppBar>
                <Main
                    style={{
                        minHeight: "calc(100vh - 6rem)",
                    }}
                    navopen={navOpen}
                    onClick={() => handleClickAwayNav()}
                >
                    {children}
                </Main>

                <Navigation open={navOpen}>{navigationchildren}</Navigation>
            </Screen>
        );
    }
);

export default Xpanel;
