import React, { CSSProperties } from "react";

export type TextElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "strong"
  | "small";

interface IText {
  /** Retorna por padrão a tag p */
  element?: TextElement;
  className?: string;
  style?: CSSProperties;
  /** Limite de linhas exibidas. Linhas em overflow serão escondidas. */
  limit?: number;
  text?: string;
  children?: string | React.ReactNode;
}

const Text = ({
  element,
  className,
  style,
  limit,
  text,
  children,
  ...rest
}: IText) => {
  let textStyle: React.CSSProperties = style || {};

  if (limit) {
    textStyle = {
      ...textStyle,
      display: "-webkit-box",
      WebkitLineClamp: limit,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
      height: `${limit * 1.4}rem`,
    };
  }

  switch (element) {
    case "h1":
      return (
        <h1 style={textStyle} className={`${className}`} {...rest}>
          {children || text}
        </h1>
      );

    case "h2":
      return (
        <h2 style={textStyle} className={`${className}`} {...rest}>
          {children || text}
        </h2>
      );

    case "h3":
      return (
        <h3 style={textStyle} className={`${className}`} {...rest}>
          {children || text}
        </h3>
      );

    case "h4":
      return (
        <h4 style={textStyle} className={`${className}`} {...rest}>
          {children || text}
        </h4>
      );

    case "h5":
      return (
        <h5 style={textStyle} className={`${className}`} {...rest}>
          {children || text}
        </h5>
      );

    case "h6":
      return (
        <h6 style={textStyle} className={`${className}`} {...rest}>
          {children || text}
        </h6>
      );

    case "p":
      return (
        <p style={textStyle} className={`${className}`} {...rest}>
          {children || text}
        </p>
      );

    case "span":
      return (
        <span style={textStyle} className={`${className}`} {...rest}>
          {children || text}
        </span>
      );

    case "strong":
      return (
        <strong style={textStyle} className={`${className}`} {...rest}>
          {children || text}
        </strong>
      );

    case "small":
      return (
        <small style={textStyle} className={className} {...rest}>
          {children || text}
        </small>
      );

    default:
      return (
        <p style={textStyle} className={`${className}`} {...rest}>
          {children || text}
        </p>
      );
  }
};

export default Text;
