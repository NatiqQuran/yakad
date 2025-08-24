import { forwardRef } from "react";
import {
    Button,
    Card,
    ClickOutsideListener,
    Row,
    Spacer,
    Stack,
    Text,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";

import styles from "./Xpopup.module.css";

export interface XpopupProps {
    align?: "start" | "center" | "end";
    heading?: string;
    onclosebuttonclick?: () => void;
    children?: React.ReactNode;
}

export const Xpopup = forwardRef<
    HTMLDivElement,
    Omit<XpopupProps, "className" | "style">
>(({ align, heading, onclosebuttonclick, children, ...restProps }, ref) => {
    return (
        <div className={styles.xpopupscreen}>
            <ClickOutsideListener
                onclickoutside={onclosebuttonclick}
                className={styles.xpopup}
            >
                <Card ref={ref} {...restProps}>
                    <Row style={{ marginBottom: "2rem" }}>
                        <Text variant="heading4">{heading}</Text>
                        <Spacer />
                        <Button
                            title="Close"
                            icon={<Symbol icon="close" />}
                            onClick={onclosebuttonclick}
                        />
                    </Row>
                    <Stack
                        align={align}
                        style={{ width: "100%", overflowY: "auto" }}
                    >
                        {children}
                    </Stack>
                </Card>
            </ClickOutsideListener>
        </div>
    );
});

Xpopup.displayName = "Xpopup";
