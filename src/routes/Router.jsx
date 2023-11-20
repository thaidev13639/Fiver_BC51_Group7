import React, { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
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
import AdminJob from "../pages/Admin/AdminJob.jsx/AdminJob";
import AdminJobType from "../pages/Admin/AdminJobType/AdminJobType";
import AdminService from "../pages/Admin/AdminService/AdminService";
import AdminDetailType from "../pages/Admin/AdminDetailType/AdminDetailType";
import AdminComment from "../pages/Admin/AdminComment/AdminComment";
import InfoUser from "../pages/InfoUser/InfoUser";
import ResearchJob from "../pages/ResearchJob/ResearchJob"
import PageNotFound from "../pages/PageNotFound/PageNotFound";
export default function Router() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [pathname])

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
          path: "/research-job/:keyword",
          element: <ResearchJob />
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
        },
        {
          path: "/home-info-user/:id",
          element: <InfoUser />
        },
        {
          path: "*",
          element: <PageNotFound />
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
          element: <AdminJob />,
        },
        {
          path: "/admin/jobtype",
          element: <AdminJobType />,
        },
        {
          path: "/admin/detailtype",
          element: <AdminDetailType />,
        },
        {
          path: "/admin/service",
          element: <AdminService />,
        },
        {
          path: "/admin/comment",
          element: <AdminComment />,
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
