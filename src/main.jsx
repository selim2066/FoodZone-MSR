import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Routes/Rout";

import { RouterProvider } from "react-router-dom";
import StoreContext from "./Context/StoreContext";
import StoreContextProvider from "./Context/StoreContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
  </StrictMode>
);
