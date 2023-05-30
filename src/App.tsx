import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./features/home";
import NotFound from "./features/not-found";
import SideBar from "./features/side-bar";
import { useState } from "react";
import Reports from "./features/reports";
import Login from "./features/login";
import ReportDetail from "./features/report";
import CreateUser from "./features/create-user";

function App() {
  const [transition, setTransition] = useState("");
  const pageList = [
    { path: "/", component: <Home /> },
    { path: "/reports/:id", component: <ReportDetail /> },
    { path: "/reports", component: <Reports /> },
    { path: "/users", component: <CreateUser /> },
    { path: "/login", component: <Login /> },
    { path: "/*", component: <NotFound /> },
  ];

  const handleTransition = () => {
    setTransition("translate-x-full");
    setTimeout(() => {
      setTransition("");
    }, 300);
  };

  const pages = pageList.map((p, i) => {
    return (
      <Route
        key={i}
        path={p.path}
        element={
          <div id={i.toString()} className={"duration-300 " + transition}>
            {p.component}
          </div>
        }
      />
    );
  });

  return (
    <div className="text-neutral-light bg-primary-0">
      <SideBar handleTransition={handleTransition} />
      <Routes>{pages}</Routes>
    </div>
  );
}

export default App;
