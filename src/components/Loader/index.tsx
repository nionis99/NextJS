import React, { HTMLAttributes } from 'react';

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Index = ({ className, ...rest }: LoaderProps) => (
  <div className="flex flex-grow h-full justify-center items-center" {...rest}>
    <div className={`animate-spin rounded-full border-b-2 border-white ${className}`} />
  </div>
);

export default Index;
