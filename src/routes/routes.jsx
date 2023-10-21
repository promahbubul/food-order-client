import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";
import MainLayout from "../Layout/MainLayout";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/my-cart",
        element: <MyCart />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default router;
