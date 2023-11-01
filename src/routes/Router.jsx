import React from "react";
import { useRoutes } from "react-router-dom";
import AdminLaysOut from "../layouts/AdminLaysOut/AdminLaysOut";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import AdminUser from "../pages/Admin/AdminUser/AdminUser";
import HomeLayout from "../layouts/HomeLayout/HomeLayouts";
import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import NoAuthGuard from "../guards/NoAuthGuard";
import AdminGuard from "../guards/AdminGuard";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        }
      ]
    },
    {
      path: "/admin",
      element: (
        <AdminGuard>
          <AdminLaysOut />
        </AdminGuard>
      ),
      children: [
        {
          path: "/admin",
          element: <AdminUser />,
        },
      ],
    },
    {
      path: "/form",
      element: (
        <NoAuthGuard>
          <LoginLayout />
        </NoAuthGuard>
      ),
      children: [
        {
          path: "/form/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return routing;
}
