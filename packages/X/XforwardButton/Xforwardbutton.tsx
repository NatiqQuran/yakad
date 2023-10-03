import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@yakad/ui";
import { ButtonProps } from "@yakad/ui/types";

export default function XforwardButton(props: ButtonProps) {
    const router = useRouter();

    return (
        <Button {...props} onClick={() => router.forward()}>
            {props.children ? props.children : "forward"}
        </Button>
    );
}
