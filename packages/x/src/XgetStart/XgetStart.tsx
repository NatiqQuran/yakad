import { forwardRef } from "react";
import classNames from "classnames";
import {
    GridContainer,
    GridItem,
    SvgIcon,
    Container,
    ContainerProps,
} from "@yakad/ui";

import styles from "./XgetStart.module.css";

export interface XgetStartProps extends ContainerProps {
    logo?: any;
    //what type we should choose for logo?
    children?: React.ReactNode;
}

export const XgetStart = forwardRef<HTMLDivElement, XgetStartProps>(
    ({ logo, size = "lg", className, style, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(styles.xgetstart, className);

        return (
            <Container
                ref={ref}
                size={size}
                {...restProps}
                className={joinedClassNames}
            >
                <GridContainer gap={2}>
                    <GridItem md={12} xl={5}>
                        <SvgIcon
                            style={{
                                width: "70vw",
                                maxWidth: "40rem",
                                margin: "auto",
                            }}
                        >
                            {logo}
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
                        }}
                    >
                        {children}
                    </GridItem>
                </GridContainer>
            </Container>
        );
    }
);
XgetStart.displayName = "XgetStart";
