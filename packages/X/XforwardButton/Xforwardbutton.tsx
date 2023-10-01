import React from "react";
import { Button } from "@yakad/ui";
import { useRouter } from "next/navigation";
import { ButtonProps } from "@yakad/ui/button/button";

export default function XforwardButton(props: ButtonProps) {
    const router = useRouter();

    return (
        <Button {...props} onClick={() => router.forward()}>
            {props.children ? props.children : "forward"}
        </Button>
    );
}
