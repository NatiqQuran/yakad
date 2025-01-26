import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./page.module.css";

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
}

const Page = forwardRef<HTMLDivElement, PageProps>(
    ({ align = "start", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.page,
            styles[align],
            className
        );

        return (
            <div ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </div>
        );
    }
);

export default Page;
