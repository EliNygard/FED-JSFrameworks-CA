import React from "react";
import { StyledButton } from "./index.styles";

/**
 * Props for the Button component.
 *
 * @interface ButtonProps
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement>
 * @property {React.ReactNode} children - The content to be displayed inside the button.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

/**
 * A styled button component that wraps the native HTML button element.
 *
 * This component forwards all standard button props (e.g., onClick, disabled)
 * to the underlying element and applies custom styles via StyledButton.
 *
 * @param {ButtonProps} props - Props for configuring the button.
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @returns {JSX.Element} A styled button element.
 */
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
