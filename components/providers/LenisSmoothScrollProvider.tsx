'use client';

import React from 'react';

import { ReactLenis } from '@studio-freight/react-lenis';

interface LenisSmoothScrollProviderProps {
  children: React.ReactNode;
}

const LenisSmoothScrollProvider: React.FC<LenisSmoothScrollProviderProps> = ({
  children,
}) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
};

export default LenisSmoothScrollProvider;
