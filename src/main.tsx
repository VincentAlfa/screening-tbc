import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { SidebarContextProvider } from './config/context/sidebar-context';
import { routes } from './config/routes/routes';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarContextProvider>
      <RouterProvider router={routes} />
    </SidebarContextProvider>
  </StrictMode>,
);
