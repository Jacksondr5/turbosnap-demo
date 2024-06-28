import React from "react";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const modeStyles = primary
    ? {
        color: "white",
        backgroundColor: "#1ea7fd",
      }
    : {
        color: "#333",
        backgroundColor: "transparent",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
      };
  const finalBackgroundColor = backgroundColor || modeStyles.backgroundColor;
  let sizeStyles = {};
  switch (size) {
    case "small":
      sizeStyles = {
        fontSize: "12px",
        padding: "10px 16px",
      };
      break;
    case "medium":
      sizeStyles = {
        fontSize: "14px",
        padding: "11px 20px",
      };
      break;
    case "large":
      sizeStyles = {
        fontSize: "16px",
        padding: "12px 24px",
      };
      break;
  }
  return (
    <button
      type="button"
      style={{
        ...modeStyles,
        ...sizeStyles,
        backgroundColor: finalBackgroundColor,
        fontFamily:
          '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: "700",
        border: "0",
        borderRadius: "3em",
        cursor: "pointer",
        display: "inline-block",
        lineHeight: "1",
      }}
      {...props}
    >
      {label}
    </button>
  );
};
