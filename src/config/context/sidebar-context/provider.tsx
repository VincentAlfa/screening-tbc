import { type ReactNode, useState } from 'react';
import { sidebarContext } from './context';

export const SidebarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <sidebarContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
      }}
    >
      {children}
    </sidebarContext.Provider>
  );
};
