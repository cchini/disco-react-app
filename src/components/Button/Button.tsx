import React, { FC, DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import cx from "classnames";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode | string;
  className?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, className, disabled = false, type } = props;
  return (
    <button
      className={cx("btnclass", className && className)}
      disabled={disabled}
      type={type || "button"}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
