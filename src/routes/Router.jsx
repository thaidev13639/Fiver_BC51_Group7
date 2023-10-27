import React from "react";
import { useRoutes } from "react-router-dom";
import AdminLaysOut from "../layouts/AdminLaysOut/AdminLaysOut";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import AdminUser from "../pages/Admin/AdminUser/AdminUser";
// import Login from "../components/Login/Login";

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
      // children: [
      //   {
      //     path: "/form/login",
      //     element: <Login />,
      //   },
       
      // ],
   
    },
  ]);

  return routing;
}
