import React, { FC } from 'react';
import Select, { Props } from 'react-select';
import cx from 'classnames';

type SelectProps = Props & {
  disabled?: boolean;
  activeMaxHeight?: boolean;
  emptyOptionsText?: string;
  label?: string;
};

const customStyles = {
  control: (values: any) => ({
    ...values,
    borderColor: '#c5c8cd',
  }),
  valueContainer: (values: any) => ({
    ...values,
    padding: '0 .5rem',
  }),
  menu: (provided: any) => ({
    ...provided,
    margin: '.25rem 0 0 0 ',
  }),

  option: (values: any) => ({
    ...values,
    padding: '.375rem .625rem',
    backgroundColor: '#fff',
  }),
  placeholder: (values: any) => ({
    ...values,
    fontSize: '.875rem',
    color: '#c5c8cd',
  }),
  indicatorSeparator: (values: any) => ({
    ...values,
    display: 'none',
  }),
};

const ReactSelect: FC<SelectProps> = ({
  isClearable = true,
  disabled = false,
  isLoading = false,
  activeMaxHeight = false,
  ...props
}: SelectProps) => {
  const { options, value, className, emptyOptionsText, label } = props;

  return (
    <>
      <label>{label}</label>
      <Select
        styles={customStyles}
        classNamePrefix="reactSelect"
        className={cx(
          'reactSelect',
          activeMaxHeight && 'reactSelect__maxHeightMenu',
          className && className,
        )}
        value={value && value}
        isDisabled={disabled && disabled}
        options={options}
        isClearable={isClearable}
        noOptionsMessage={() =>
          emptyOptionsText ? `${emptyOptionsText}` : null
        }
        {...props}
      />
    </>
  );
};

export default ReactSelect;
