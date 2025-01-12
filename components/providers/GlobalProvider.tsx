import React  from 'react';

import LenisSmoothScrollProvider from './LenisSmoothScrollProvider';
import ClientProvider from './ClientProvider';

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {

  return (
      <LenisSmoothScrollProvider>
        <ClientProvider>{children}</ClientProvider>
      </LenisSmoothScrollProvider>
  );
};

export default GlobalProvider;
