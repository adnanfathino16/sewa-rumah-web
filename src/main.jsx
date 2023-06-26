import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import HouseContextProvider from "./components/Fragments/HouseContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/property/:id",
    element: <PropertyDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HouseContextProvider>
      <RouterProvider router={router} />
    </HouseContextProvider>
  </React.StrictMode>
);
