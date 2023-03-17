import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ComponentsDemo from "./features/components-demo";

function App() {
  const testTailwind = (
    <h1 className="text-3xl font-bold underline text-red-600">
      Simple React Typescript Tailwind Sample
    </h1>
  );
  const router = createBrowserRouter([
    {
      path: "/",
      element: testTailwind,
    },
    {
      path: "/components-demo",
      element: <ComponentsDemo />,
    },
  ]);
  return (
    <RouterProvider router={router} />

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
