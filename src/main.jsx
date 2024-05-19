import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistrationPages from './pages/RegistrationPages.jsx';
import LoginPages from './pages/LoginPages.jsx';

const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegistrationPages />,
  },
  {
    path: "/login",
    element: <LoginPages />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
