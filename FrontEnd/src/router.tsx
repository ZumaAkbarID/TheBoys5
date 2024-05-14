import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import GuestLayout from "./Layout/GuestLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/*",
                element: <Navigate to="/dashboard" />,
            },
            {
                path: "/dashboard",
                element: <App />,
            },
            {
                path: "/members*",
                element: <App />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register*",
                element: <Register />,
            },
        ],
    },
]);

export default router;
