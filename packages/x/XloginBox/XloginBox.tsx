import { AppBar, Card, Main, Page } from "@yakad/ui";
import React from "react";
import styles from "./XloginBox.module.css";

export default function XloginBox(props: React.HTMLAttributes<HTMLElement>) {
    return (
        <Page>
            <AppBar className={styles.header}></AppBar>
            <Main className={styles.main}>
                <Card className={styles.card}>{props.children}</Card>
            </Main>
        </Page>
    );
}
