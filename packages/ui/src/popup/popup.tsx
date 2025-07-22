import { forwardRef } from "react";
import {
    Button,
    Card,
    ClickOutsideListener,
    Row,
    Spacer,
    Stack,
    Text,
} from "../";
import Symbol from "@yakad/symbols";
import styles from "./popup.module.css";

export interface PopupProps {
    align?: "start" | "center" | "end";
    heading?: string;
    onclosebuttonclick?: () => void;
    children?: React.ReactNode;
}

export const Popup = forwardRef<
    HTMLDivElement,
    Omit<PopupProps, "className" | "style">
>(({ align, heading, onclosebuttonclick, children, ...restProps }, ref) => {
    return (
        <div className={styles.popupscreen}>
            <ClickOutsideListener
                onclickoutside={onclosebuttonclick}
                className={styles.popup}
            >
                <Card ref={ref} {...restProps} className={styles.popup}>
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

Popup.displayName = "Popup";
