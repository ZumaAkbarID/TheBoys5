import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import GuestLayout from "./Layout/GuestLayout";
import Member from "./Pages/Member/Index";
import MemberLayout from "./Layout/MemberLayout";
import Profile from "./Pages/Member/Profile/Index";
import Kas from "./Pages/Member/Kas/Index";
import Talangan from "./Pages/Member/Talangan/Index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard" />,
            },
            {
                path: "/dashboard",
                element: <App />,
            },
            {
                path: "/member",
                element: <MemberLayout />,
                children: [
                    {
                        path: "/member/index",
                        element: <Member />,
                    },
                    {
                        path: "/member/profile",
                        element: <Profile />,
                    },
                    {
                        path: "/member/kas",
                        element: <Kas />,
                    },
                    {
                        path: "/member/talangan",
                        element: <Talangan />,
                    },
                ],
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
