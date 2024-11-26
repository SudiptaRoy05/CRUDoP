import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ADDCoffee from "./ADDCoffee.jsx";
import UpdateCoff from "./UpdateCoff.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/addCoffee',
    element:<ADDCoffee></ADDCoffee>
  },
  {
    path:'/updateCOffe',
    element:<UpdateCoff></UpdateCoff>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>
);
