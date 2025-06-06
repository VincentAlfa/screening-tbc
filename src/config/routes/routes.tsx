import MainLayout from '@/layout/main-layout';
import Home from '@/pages/home';
import Screening from '@/pages/screening';
import Video from '@/pages/video';
import { createBrowserRouter } from 'react-router';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'screening', element: <Screening /> },
      { path: 'video-edukasi', element: <Video /> },
    ],
  },
]);
