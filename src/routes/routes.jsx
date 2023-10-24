import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";
import MainLayout from "../Layout/MainLayout";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import FoodDetails from "../Pages/FoodDetails";
import ErrorPage from "../Pages/ErrorPage";
import UpdateFood from "../Pages/UpdateFood";
import Users from "../Pages/Users";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("https://food-order-server-three.vercel.app/menu"),
      },
      {
        path: "/add-product",
        element: (
          <PrivetRoute>
            <AddProduct />
          </PrivetRoute>
        ),
      },
      {
        path: "/update-food/:id",
        element: (
          <PrivetRoute>
            <UpdateFood />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://food-order-server-three.vercel.app/menu/${params.id}`),
      },
      {
        path: "/my-cart",
        element: (
          <PrivetRoute>
            <MyCart />
          </PrivetRoute>
        ),
        loader: () => fetch("https://food-order-server-three.vercel.app/menu"),
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/food-details/:id",
        element: (
          <PrivetRoute>
            <FoodDetails></FoodDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://food-order-server-three.vercel.app/menu/${params.id}`),
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://food-order-server-three.vercel.app/user"),
      },
    ],
  },
]);

export default router;
