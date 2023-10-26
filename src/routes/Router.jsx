import React from "react";
import { useRoutes } from "react-router-dom";
import AdminLaysOut from "../layouts/AdminLaysOut/AdminLaysOut";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import AdminUser from "../pages/Admin/AdminUser/AdminUser";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/admin",
      element: <AdminLaysOut/>,
      children: [
        {
          path: "/admin",
          element: <AdminUser />,
        },
      ],
    },

    {
      path: "/form",
      element: <LoginLayout/>,
   
    },
  ]);

  return routing;
}
