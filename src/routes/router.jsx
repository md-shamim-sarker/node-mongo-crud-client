import {createBrowserRouter} from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Main from '../layouts/Main';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Dashboard from '../pages/Dashboard/Dashboard';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    }
]);

export default router;