import { createBrowserRouter } from "react-router";
import Homelayout from "../layouts/Homelayout";
import Home from "../components/pages/Home";
import CategoryNews from "../components/pages/CategoryNews";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Authlayouts from "../layouts/Authlayouts";
import NewsDetails from "../components/pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../components/pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/auth",
    element: <Authlayouts></Authlayouts>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
  },
  {
    path: "/*",
    element: <h1>Error404</h1>,
  },
]);

export default router;
