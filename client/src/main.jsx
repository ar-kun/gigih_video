import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import { VideoDetailPage } from './pages/VideoDetailPage';

const router = createBrowserRouter([
 {
  path: '/',
  element: <HomePage />,
  errorElement: <ErrorPage />,
 },
 {
  path: '/video/:id',
  element: <VideoDetailPage />,
  errorElement: <ErrorPage />,
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <RouterProvider router={router} />
 </React.StrictMode>
);
