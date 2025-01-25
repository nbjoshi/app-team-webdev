import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Shop from "./pages/Shop";
import PlantDetails from "./pages/PlantDetails";
// import { PlantProvider } from "./context/PlantContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Shop />, errorElement: <ErrorPage /> },
      { path: "/plant/:id", element: <PlantDetails /> },
    ],
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <PlantProvider>
    </PlantProvider> */}
  </StrictMode>
);
