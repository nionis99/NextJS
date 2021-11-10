import React, { useState } from 'react';
import NextImage, { ImageProps } from 'next/image';

const Image = ({ src, ...rest }: ImageProps) => {
  const [isImageHasError, setImageHasError] = useState(false);

  return (
    <NextImage
      src={isImageHasError ? '/images/not_found.png' : src || '/images/not_found.png'}
      onError={() => setImageHasError(true)}
      {...rest}
    />
  );
};

export default Image;
