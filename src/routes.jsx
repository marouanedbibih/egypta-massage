import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./views/auth/Login";
import Signup from "./views/auth/Signup";
import ClientLayout from "./layouts/ClientLayout";
import Home from "./views/client/Home";
import Reservation from "./views/client/Reservation";
import NosMassage from "./views/client/NosMassage";
import ClientProfile from "./views/client/ClientProfile";
import ChequesCadeaux from "./views/client/ChequesCadeaux";
import NotFound from "./views/errors/NotFound";
import ColabLayout from "./layouts/ColabLayout";
import Calendar from "./views/collaborateur/Calendar";
import ColabProfile from "./views/collaborateur/ColabProfile";
import AdminProfile from "./views/admin/AdminProfile";
import Dashboard from "./views/admin/Dashboard";
import Massages from "./views/admin/Massages";
import Reservations from "./views/admin/Reservations";
import Users from "./views/admin/Users";
import AdminLayout from "./layouts/AdminLayout";

const routes = createBrowserRouter([
    // Client Routes
    {
        path: '/',
        element: <ClientLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Navigate to="/"/>
            },
            {
                path: "/reservation",
                element: <Reservation />
            },
            {
                path: "/nos-massage",
                element: <NosMassage />
            },
            {
                path: "/cheques-cadeaux",
                element: <ChequesCadeaux />
            },
        ]
    },
    // Client Profile
    {
        path: "/profile",
        element: <ClientProfile />
    },
    // Auth Routes
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]

    },
    // Admin Routes
    {
        path: '/',
        element: <AdminLayout />,
        children: [
            {
                path: '/admin-profile',
                element: <AdminProfile />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/massages',
                element: <Massages />
            },
            {
                path: '/reservations',
                element: <Reservations />
            },
            {
                path: '/users',
                element: <Users />
            },
        ]
    },
    // Colaborateur Routes
    {
        path: '/',
        element: <ColabLayout />,
        children: [
            {
                path: "/calendar",
                element: <Calendar />
            },
            {
                path: "/colab-profile",
                element: <ColabProfile />
            }
        ]
    },
    // Not Found page
    {
        path: '*',
        element: <NotFound />
    },
])

export default routes;