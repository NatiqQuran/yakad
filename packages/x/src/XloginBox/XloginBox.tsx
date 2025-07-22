import { forwardRef } from "react";
import classNames from "classnames";
import { AppBar, Card, Main, Screen, ScreenProps } from "@yakad/ui";

import styles from "./XloginBox.module.css";

export interface XloginBoxProps extends ScreenProps {
    classnamecard?: string;
    stylecard?: React.CSSProperties;
    children?: React.ReactNode;
}

const XloginBox = forwardRef<HTMLDivElement, XloginBoxProps>(
    ({ classnamecard, stylecard, children, ...restProps }, ref) => {
        return (
            <Screen ref={ref} {...restProps}>
                <AppBar className={styles.header}></AppBar>
                <Main className={styles.main}>
                    <Card
                        className={classNames(styles.card, classnamecard)}
                        style={stylecard}
                    >
                        {children}
                    </Card>
                </Main>
            </Screen>
        );
    }
);

export default XloginBox;
