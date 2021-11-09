import React from 'react';
import Modal from 'containers/Modal';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { testingConstants } from 'utils/Constants';

interface DeleteConfirmationProps {
  isOpen: boolean;
  title: string;
  description: string;
  isLoading: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const DeleteConfirmation = ({ isOpen, title, description, isLoading, onConfirm, onClose }: DeleteConfirmationProps) => (
  <Modal isOpen={isOpen} onClose={onClose} title={title} close>
    <span className="font-normal text-lg my-6">{description}</span>
    <Button
      className="flex ml-auto mt-6"
      buttonTitle={isLoading ? <Loader className="w-6 h-6" /> : 'Confirm'}
      variant="primary"
      size="medium"
      onClick={onConfirm}
      data-testid={testingConstants.confirmRemoveMovie}
    />
  </Modal>
);

export default DeleteConfirmation;
