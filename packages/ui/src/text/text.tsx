import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./text.module.css";

type TextVariant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "caption"
    | "span";

export interface HProps extends React.HTMLAttributes<HTMLHeadingElement> {
    variant?: TextVariant;
    children?: React.ReactNode;
}
export const Heading = forwardRef<HTMLHeadingElement, HProps>(
    ({ variant = "h1", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
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

export const H2 = forwardRef<HTMLHeadingElement, HProps>(
    ({ variant = "h2", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
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

export const H3 = forwardRef<HTMLHeadingElement, HProps>(
    ({ variant = "h3", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
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

export const H4 = forwardRef<HTMLHeadingElement, HProps>(
    ({ variant = "h4", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
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

export const H5 = forwardRef<HTMLHeadingElement, HProps>(
    ({ variant = "h5", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
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

export const H6 = forwardRef<HTMLHeadingElement, HProps>(
    ({ variant = "h6", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
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

export interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: TextVariant;
    children?: React.ReactNode;
}
export const P = forwardRef<HTMLParagraphElement, PProps>(
    ({ variant = "p", className, children, ...restProps }, ref) => {
        const joinedClassNames = classNames(
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
