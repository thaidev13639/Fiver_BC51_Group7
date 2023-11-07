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
import JobsTitle from "../pages/JobsTitle/JobsTitle";
import JobsDetail from "../pages/JobsDetail/JobsDetail";
import JobInfo from "../pages/JobInfo/JobInfo";
import Register from "../components/Register/Register";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/job-title/:id",
          element: <JobsTitle />
        },
        {
          path: "/job-detail/:id",
          element: <JobsDetail />
        },
        {
          path: "/job-info/:id",
          element: <JobInfo />
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
         {
          path: "/admin/job",
          element: <AdminUser />,
        },
        {
           path: "/admin/service",
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
        {
          path: "/form/register",
          element: <Register />,
        }
      ],
    },
  ]);

  return routing;
}
