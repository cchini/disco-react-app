import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx from 'classnames';
import './input.scss';

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
    <div className={cx('cntInput', className && className)}>
      {label && <label className="cntInput_label">{label}</label>}
      <input
        className={cx('cntInput_field', className && className)}
        type={type}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
