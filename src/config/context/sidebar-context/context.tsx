import { createContext } from 'react';
import type { SidebarContextType } from './hook';

export const sidebarContext = createContext<SidebarContextType | null>(null);
