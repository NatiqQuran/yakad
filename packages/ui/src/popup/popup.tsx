import { forwardRef } from "react";
import { Card, CardProps, ClickOutsideListener } from "../";
import styles from "./popup.module.css";

export interface PopupProps extends CardProps {
    onclosebuttonclick?: () => void;
}

export const Popup = forwardRef<
    HTMLDivElement,
    Omit<PopupProps, "className" | "style">
>(({ onclosebuttonclick, children, ...restProps }, ref) => {
    return (
        <div className={styles.popupscreen}>
            <ClickOutsideListener
                onclickoutside={onclosebuttonclick}
                className={styles.popup}
            >
                <Card
                    ref={ref}
                    {...restProps}
                    className={styles.popup}
                    style={{ overflow: "auto" }}
                >
                    {children}
                </Card>
            </ClickOutsideListener>
        </div>
    );
});

Popup.displayName = "Popup";
