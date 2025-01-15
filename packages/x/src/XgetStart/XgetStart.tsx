import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import { GridContainer, GridItem, SvgIcon, Container } from "@yakad/ui";

interface XgetStartProps extends React.HTMLAttributes<HTMLElement> {
    logo?: any;
    //what type we should choose for logo?
    children: React.ReactNode;
}

export default function XgetStart(props: XgetStartProps) {
    const joinedClassNames = joinClassNames(props.className!);
    const joinedStyles = joinStyles({ padding: "6rem 0" }, props.style!);

    return (
        <Container size="lg" className={joinedClassNames} style={joinedStyles}>
            {/* remove class and choose background */}
            <GridContainer style={{ rowGap: "8rem" }}>
                <GridItem md={12} xl={5}>
                    <SvgIcon style={{ maxWidth: "40rem", margin: "auto" }}>
                        {props.logo ? props.logo : null}
                    </SvgIcon>
                </GridItem>
                <GridItem
                    md={12}
                    xl={7}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 2rem",
                    }}
                >
                    {props.children as React.ReactNode}
                </GridItem>
            </GridContainer>
        </Container>
    );
}
