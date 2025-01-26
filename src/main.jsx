import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopBody from "./components/ShopBody";
import PlantDetails from "./pages/PlantDetails";
import { CartProvider } from "./context/CartContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ShopBody />, errorElement: <ErrorPage /> },
      { path: "/plant/:id", element: <PlantDetails /> },
    ],
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
