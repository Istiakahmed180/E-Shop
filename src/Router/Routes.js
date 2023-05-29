import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Pages/Home/Home";
import Menu from "../Components/Pages/Menu/Menu";
import About from "../Components/Pages/About/About";
import Contact from "../Components/Pages/Contact/Contact";
import Error from "../Components/Pages/Error/Error";
import NewProduct from "../Components/Pages/NewProduct/NewProduct";
import Login from "../Components/Pages/Login/Login";
import Signup from "../Components/Pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/new_product",
        element: <NewProduct></NewProduct>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default router;
