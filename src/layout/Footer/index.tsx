import React, { HTMLAttributes } from 'react';
import AppLogo from 'components/Logo';

const Footer = ({ className = '', ...restProps }: HTMLAttributes<HTMLDivElement>) => (
  <footer className={`flex items-center justify-center bg-footer w-full py-6 ${className}`} {...restProps}>
    <AppLogo />
  </footer>
);

export default Footer;
