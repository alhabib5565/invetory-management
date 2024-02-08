import App from "@/App";
import DashboardHome from "@/components/dashboard/dashboardHome/DashboardHome";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import ManageEvent from "@/components/dashboard/manageEvent/ManageEvent";
import ManageService from "@/components/dashboard/manageService/ManageService";
import { Navigate, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/home" />,
      },
      {
        path: "home",
        element: <DashboardHome />,
      },
      {
        path: "recent-event",
        element: <div>this is recent event </div>,
      },
      {
        path: "event",
        element: <ManageEvent />,
      },
      {
        path: "service",
        element: <ManageService />,
      },
    ],
  },
]);

export default router;
