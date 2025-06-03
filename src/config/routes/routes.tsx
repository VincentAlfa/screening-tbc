import { createBrowserRouter } from 'react-router';
import Home from '@/pages/home';
import Screening from '@/pages/screening';
import MainLayout from '@/layout/MainLayout';
import Video from '@/pages/video';

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
