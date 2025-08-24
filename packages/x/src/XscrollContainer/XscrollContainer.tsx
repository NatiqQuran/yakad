import { forwardRef } from "react";

import { Container, ContainerProps, Row } from "@yakad/ui";

export const XScrollContainer = forwardRef<HTMLDivElement, ContainerProps>(
    ({ style, children, ...restProps }, ref) => {
        return (
            <Container
                ref={ref}
                style={{ padding: 0, ...style }}
                {...restProps}
            >
                <Row overflow="scroll" style={{ padding: "2rem", gap: "2rem" }}>
                    {children}
                </Row>
            </Container>
        );
    }
);
XScrollContainer.displayName = "XScrollContainer";
