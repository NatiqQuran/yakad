import React from "react";
import { Button } from "@yakad/ui";
import { useRouter } from "next/navigation";

interface XforwardButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    name?: string;
    size?: "small" | "medium" | "large";
    variant?:
        | "text"
        | "outlined"
        | "filled"
        | "filledtonal"
        | "tonal"
        | "elevated"
        | "link"
        | "fab";
    borderStyle?: "none" | "semi" | "squircle" | "rounded";
    icon?: JSX.Element;
    iconPosition?: "start" | "end";
    loadingPosition?: "auto" | "center";
    loadingVariant?: "scaleOut" | "dots" | "spinner";
    disabled?: boolean;
}

export default function XforwardButton(props: XforwardButtonProps) {
    const router = useRouter();

    return (
        <Button {...props} onClick={() => router.forward()}>
            {props.children ? props.children : "forward"}
        </Button>
    );
}
