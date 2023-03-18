import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ComponentsDemo from "./features/components-demo";
import Home from "./features/home";
import NotFound from "./features/not-found";

function App() {
  const router = createBrowserRouter([
    {
      path: "/info",
      element: <Home />,
    },
    {
      path: "/info/*",
      element: <NotFound />,
    },
    {
      path: "/info/components-demo",
      element: <ComponentsDemo />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
