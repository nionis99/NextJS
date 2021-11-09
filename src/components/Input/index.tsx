import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import cx from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
}

const inputClassName =
  'appearance-none block w-full bg-gray80 text-white border rounded py-2 h-12 px-4 mb-3 leading-tight' +
  ' focus:outline-none focus:border-gray-200';
const labelClassName = 'block tracking-wide text-xs font-bold mb-2 upper-case';

const Input = ({ label, register, errorMessage, className, ...rest }: InputProps) => (
  <div className={className}>
    <label className={cx(labelClassName, errorMessage ? 'text-red-500' : 'text-primary')}>{label}</label>
    <input className={cx(inputClassName, errorMessage ? 'border-red-500' : 'border-gray80')} {...register} {...rest} />
    {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
  </div>
);

export default Input;
