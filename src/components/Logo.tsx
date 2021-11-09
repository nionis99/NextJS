import React from 'react';
import Logo from 'assets/icons/logo.svg';

const AppLogo = ({ width = 150, height = 24, ...rest }: React.SVGAttributes<SVGElement>) => (
  <Logo width={width} height={height} {...rest} />
);

export default AppLogo;
