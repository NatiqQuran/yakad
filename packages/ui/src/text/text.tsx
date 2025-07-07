import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./text.module.css";

type TextVariant =
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "heading6"
    | "body1"
    | "body2"
    | "body3"
    | "caption"
    | "span";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    variant?: TextVariant;
    children?: React.ReactNode;
}
export const H1 = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ variant = "heading1", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.text,
            styles[variant as string],
            className
        );
        return (
            <h1 ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </h1>
        );
    }
);

export const H2 = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ variant = "heading2", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.text,
            styles[variant as string],
            className
        );
        return (
            <h2 ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </h2>
        );
    }
);

export const H3 = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ variant = "heading3", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.text,
            styles[variant as string],
            className
        );
        return (
            <h3 ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </h3>
        );
    }
);

export const H4 = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ variant = "heading4", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.text,
            styles[variant as string],
            className
        );
        return (
            <h4 ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </h4>
        );
    }
);

export const H5 = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ variant = "heading5", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.text,
            styles[variant as string],
            className
        );
        return (
            <h5 ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </h5>
        );
    }
);

export const H6 = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ variant = "heading6", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.text,
            styles[variant as string],
            className
        );
        return (
            <h6 ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </h6>
        );
    }
);

export interface ParagraphProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: TextVariant;
    children?: React.ReactNode;
}
export const P = forwardRef<HTMLParagraphElement, ParagraphProps>(
    ({ variant = "body2", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.text,
            styles[variant as string],
            className
        );
        return (
            <p ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </p>
        );
    }
);

export interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: TextVariant;
    children?: React.ReactNode;
}
export const Span = forwardRef<HTMLSpanElement, SpanProps>(
    ({ variant = "span", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
            styles.text,
            styles[variant as string],
            className
        );
        return (
            <span ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </span>
        );
    }
);
