import React from 'react';
import Landing from 'layout/Landing';
import Modal from 'containers/Modal';

interface Props {
  title: string;
}

const ErrorBoundaryView = ({ title }: Props) => (
  <Landing>
    <Modal title={title} isOpen={true}>
      <span className="text-primary cursor-pointer text-2xl" onClick={() => (window.location.pathname = '/')}>
        Go to homepage
      </span>
    </Modal>
  </Landing>
);

export default ErrorBoundaryView;
