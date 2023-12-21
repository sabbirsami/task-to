import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/home/Home";
import Register from "../components/auth/Register";
import ErrorPage from "../components/shared/errorPage/ErrorPage";
import Dashboard from "../components/dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/management",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/management",
                element: ".",
            },
            {
                path: "/management/manage-tasks",
                element: "task",
            },
        ],
    },
]);

export default router;
