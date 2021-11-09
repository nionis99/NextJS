import React, { HTMLAttributes } from 'react';
import XIcon from 'assets/icons/x.svg';
import cx from 'classnames';

const absoluteCenter = 'fixed top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 z-10';

const modalSizes = {
  default: 'h-auto w-2/3',
  large: 'h-auto w-3/4',
  medium: 'h-auto w-2/3',
  small: 'h-auto w-1/2',
};

export type ModalSize = keyof typeof modalSizes;

interface ModalViewProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onClose?: () => void;
  title?: string;
  close?: boolean;
  size?: ModalSize;
}

const ModalView = ({
  children,
  title,
  onClose,
  close = false,
  size = 'default',
  className = '',
  ...restProps
}: ModalViewProps) => (
  <>
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
    <div
      className={cx(
        'flex flex-col p-4 bg-content text-white rounded shadow-modal z-10',
        absoluteCenter,
        modalSizes[size],
        className,
      )}
      {...restProps}
    >
      {close && (
        <div className="flex items-center w-full">
          <XIcon className="ml-auto justify-end w-6 h-6 cursor-pointer" onClick={onClose} />
        </div>
      )}
      <div className="flex flex-col items-center px-14 py-2 w-full h-full">
        {!!title && (
          <div className="flex w-full font-light uppercase text-4xl text-white text-left uppercase">{title}</div>
        )}
        <div className={cx('flex flex-col w-full h-full', { 'mt-4': !!title })}>{children}</div>
      </div>
    </div>
  </>
);

export default ModalView;
