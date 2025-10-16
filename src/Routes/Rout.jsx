import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/HomeLayouts/Home";
import Auth from "../layouts/HomeLayouts/Authentication/Auth";

import Login from "../layouts/HomeLayouts/Login/Login";
import Registration from "../layouts/HomeLayouts/Registration/Registration";
import Cart from "../layouts/HomeLayouts/cart/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path:"/auth/registration",
        element:<Registration/>
      }
    ],
  },
  {
    path:"/cart",
    element:<Cart/>
  }
]);
export default router;
