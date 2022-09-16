import * as React from 'react';
import cx from 'classnames';
import './switch.scss';

export interface ISwitch
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /** overwrite className */
  className?: string;
  /** overwrite className in checkbox */
  classNameSwitch?: string;
  /** label Left side checkbox */
  labelLeft?: React.ReactNode | string;
  /** label Right side checkbox */
  labelRight?: React.ReactNode | string;
  /** disabled state */
  disabled?: boolean;
  ref?: any;
}

const Switch: React.FC<ISwitch> = ({
  labelLeft = '',
  labelRight = '',
  disabled = false,
  ...props
}: ISwitch) => {
  const { className, classNameSwitch, ref } = props;
  const isLabelLeftString = labelLeft && typeof labelLeft === 'string';
  const isLabelRightString = labelRight && typeof labelRight === 'string';
  return (
    <div
      className={cx(
        'componentSwitch',
        'container-row',
        'row_align--end',
        className && className,
      )}>
      <label className="label">
        {isLabelLeftString ? (
          <span className={'label_left'}>{labelLeft}</span>
        ) : (
          <>{labelLeft}</>
        )}
        <input
          {...props}
          className={cx('label_switch', classNameSwitch && classNameSwitch)}
          type="checkbox"
          disabled={disabled}
          ref={ref}
        />
        <span className={'label_button'}></span>
        {isLabelRightString ? (
          <span className={'label_right'}>{labelRight}</span>
        ) : (
          <>{labelRight}</>
        )}
      </label>
    </div>
  );
};

export default Switch;
