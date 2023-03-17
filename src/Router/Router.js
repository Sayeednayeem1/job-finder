import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ApplyForm from "../Pages/ApplyForm/ApplyForm";
import About from "../Pages/Home/About/About";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/applyForm',
                element: <ApplyForm></ApplyForm>
            }
        ]
    },
    {
        path: '*',
        element: <p>this is a test</p>
    }
])