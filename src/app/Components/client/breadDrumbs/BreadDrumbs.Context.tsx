'use client'
import { FolderPath } from '@/types/FolderPath';
import React, { useState, createContext, useContext, ReactNode } from 'react';


interface BreadDrumbsContextData {
  path: FolderPath
  togglePath: ({ path }: BreadDrumbsContextData) => void;
}

export const BreadDrumbsContext = createContext<BreadDrumbsContextData>(
  {} as BreadDrumbsContextData
);

const BreadDrumbsContextProvider = ({ children }: {children: ReactNode}) => {
  const [path, setIsOpen] = useState<FolderPath>({} as FolderPath);

  const togglePath = ({ path }: BreadDrumbsContextData) => {
    setIsOpen(path);
  };

  return (
    <BreadDrumbsContext.Provider value={{ path, togglePath }}>
      {children}
    </BreadDrumbsContext.Provider>
  );
};

export const useBreadDrumbs = (): BreadDrumbsContextData => {
  const context = useContext(BreadDrumbsContext);

  if (!context) {
    throw new Error('useBreadDrumbs must be used within a BreadDrumbsContextProvider');
  }

  return context;
};

export default BreadDrumbsContextProvider
