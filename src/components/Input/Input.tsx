import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from "react";
import cx from "classnames"

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  disabled?: boolean;
}

const Input: FC<InputProps> = (props) => {
  const { type = "text", disabled=false, className } = props;
  return <input  className={cx("inputclassname", className && className)} type={type} disabled={disabled} />;
};

export default Input;
