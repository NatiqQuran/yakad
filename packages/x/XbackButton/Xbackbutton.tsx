"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@yakad/ui";
import { ButtonProps } from "@yakad/ui/types";

export default function XbackButton(props: ButtonProps) {
    const router = useRouter();

    return (
        <Button {...props} onClick={() => router.back()}>
            {props.children ? props.children : "back"}
        </Button>
    );
}
