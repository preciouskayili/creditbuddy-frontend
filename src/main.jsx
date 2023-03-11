import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Expenses from "./pages/Expenses";
import Settings from "./pages/Settings";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Auth0ProviderWithHistory from "./components/Auth/Auth0Provider";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/expenses",
    element: <Expenses />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0ProviderWithHistory>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </Auth0ProviderWithHistory>
);
