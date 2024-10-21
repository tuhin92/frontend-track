import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "./Home";
import Abouts from "./Abouts";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/abouts',
                element: <Abouts></Abouts>
            }
        ]
    },
]);

export default routes;