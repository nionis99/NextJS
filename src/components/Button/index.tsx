import React, { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

const buttonVariants = {
  primary: 'text-white bg-primary border-primary',
  'outline-primary': 'border-primary text-primary',
  secondary: 'text-primary bg-gray68 border-gray68',
};

const buttonSizes = {
  large: 'px-4 py-2 md:px-16 md:py-4',
  medium: 'px-2 md:px-11 py-1 md:py-2.5',
  small: 'px-1 py-0.5 md:px-4 md:py-1',
};

type ButtonVariant = keyof typeof buttonVariants;
type ButtonSize = keyof typeof buttonSizes;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTitle: string | React.ReactNode;
  variant: ButtonVariant;
  size: ButtonSize;
}

const Button = ({ buttonTitle, variant, size, className = '', ...rest }: ButtonProps) => (
  <button
    className={cx(
      'flex justify-center items-center rounded border p-2',
      buttonVariants[variant],
      buttonSizes[size],
      className,
    )}
    {...rest}
  >
    {buttonTitle}
  </button>
);

export default Button;
