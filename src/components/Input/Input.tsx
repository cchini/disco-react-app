import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx from 'classnames';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  disabled?: boolean;
  label?: string;
}

const Input: FC<InputProps> = props => {
  const { type = 'text', label = '', disabled = false, className } = props;
  return (
    <>
      <label>{label}</label>
      <input
        className={cx('inputclassname', className && className)}
        type={type}
        disabled={disabled}
      />
      ;
    </>
  );
};

export default Input;
