import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Homepage from './components/Homepage.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import Dashboard from './components/Dashboard.jsx'
import './css/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />

  },
  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/signup",
    element: <SignUp />
  },

  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);