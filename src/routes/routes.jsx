import { createBrowserRouter } from "react-router";
import Homelayout from "../layouts/Homelayout";
import Home from "../components/pages/Home";
import CategoryNews from "../components/pages/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Homelayout></Homelayout>,
            children:[
                {
                    path:"",
                    element: <Home></Home>
                },
                {
                    path:"/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: ()=> fetch('/news.json'),
                },

            ]
        },
         {
            path: "/auth",
            element: <h1>Authentication Layout</h1>
        },
         {
            path: "/news",
            element: <h1>News Layout</h1>
        },
         {
            path: "/*",
            element: <h1>Error404</h1>
        },
    ]
)


export default router;