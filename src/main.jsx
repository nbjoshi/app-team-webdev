import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Shop from "./pages/Shop";
import PlantDetails from "./pages/PlantDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Shop /> },
      { path: "/plant/:id", element: <PlantDetails /> },
    ],
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
