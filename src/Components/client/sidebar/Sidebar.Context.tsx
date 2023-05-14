'use client'
import React, { useState, createContext, useContext, ReactNode } from 'react';

interface SidebarContextData {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextData>(
  {} as SidebarContextData
);

const SidebarContextProvider = ({ children }: {children: ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextData => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebar must be used within a SidebarContextProvider');
  }

  return context;
};

export default SidebarContextProvider;
