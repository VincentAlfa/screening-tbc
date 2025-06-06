import React, { useContext } from 'react';
import { sidebarContext } from './context';

export type SidebarContextType = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useSidebarContext = (): SidebarContextType => {
  const context = useContext(sidebarContext);

  if (!context) {
    throw new Error(
      'useSidebarContext must be used within a SidebarContextProvider',
    );
  }

  return context;
};
