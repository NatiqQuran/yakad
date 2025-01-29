import React, { forwardRef } from "react";
import classNames from "classnames";
import { AppBar, Card, Main, Page, PageProps } from "@yakad/ui";

import styles from "./XloginBox.module.css";

export interface XloginBoxProps extends PageProps {
    classnamecard?: string;
    stylecard?: React.CSSProperties;
    children?: React.ReactNode;
}

const XloginBox = forwardRef<HTMLDivElement, XloginBoxProps>(
    ({ classnamecard, stylecard, children, ...restProps }, ref) => {
        return (
            <Page ref={ref} {...restProps}>
                <AppBar className={styles.header}></AppBar>
                <Main className={styles.main}>
                    <Card
                        className={classNames(styles.card, classnamecard)}
                        style={stylecard}
                    >
                        {children}
                    </Card>
                </Main>
            </Page>
        );
    }
);

export default XloginBox;
