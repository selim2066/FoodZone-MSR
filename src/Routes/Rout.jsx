import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/HomeLayouts/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);
export default router;