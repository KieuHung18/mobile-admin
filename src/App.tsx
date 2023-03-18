import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ComponentsDemo from "./features/components-demo";
import Home from "./features/home";
import NotFound from "./features/not-found";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/components-demo",
      element: <ComponentsDemo />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
