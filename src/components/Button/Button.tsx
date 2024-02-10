import React from "react";
import { ReactElement } from "react";
import "./Button.css";

interface ButtonProps {
  children: ReactElement | string;
}

function Button({ children }: ButtonProps) {
  return <button className="Button">{children}</button>;
}

export default Button;
