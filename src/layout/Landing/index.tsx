import React, { HTMLAttributes } from 'react';
import AppLogo from 'components/Logo';

interface LandingProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Landing = ({ children, className = '', ...restProps }: LandingProps) => (
  <div
    className={`flex bg-landing bg-cover bg-center bg-no-repeat justify-center h-screen text-white p-4 ${className}`}
    {...restProps}
  >
    {children}
    <div className="flex mt-auto">
      <AppLogo width={360} height={60} />
    </div>
  </div>
);

export default Landing;
