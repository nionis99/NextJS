import React, { HTMLAttributes, useCallback, useEffect } from 'react';
import ModalView, { ModalSize } from 'components/Modals/ModalView';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  title?: string;
  close?: boolean;
  size?: ModalSize;
}

const Modal = ({ isOpen, children, onClose, close = false, size = 'default', ...modalProps }: ModalProps) => {
  const onEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onEscape, false);

      return () => {
        document.removeEventListener('keydown', onEscape, false);
      };
    }
  }, [isOpen, onEscape]);

  if (!isOpen) return null;

  return (
    <ModalView onClose={onClose} close={close} size={size} {...modalProps}>
      {children}
    </ModalView>
  );
};

export default Modal;
