import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopBody from "./components/ShopBody";
import PlantDetails from "./pages/PlantDetails";
import { CartProvider } from "./context/CartContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import { PlantProvider } from "./context/PlantContext";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <ShopBody /> },
      { path: "/plant/:id", element: <PlantDetails /> },
      { path: "/404", element: <ErrorPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlantProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </PlantProvider>
  </StrictMode>
);
