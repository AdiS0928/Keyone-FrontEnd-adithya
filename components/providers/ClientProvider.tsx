
import React from 'react';

interface ClientProviderProps {
  children: React.ReactNode;
}


const ClientProvider = ({ children }: ClientProviderProps) => {


  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default ClientProvider;
