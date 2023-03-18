import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import ComponentsDemo from "./features/components-demo";
import Home from "./features/home";
import NotFound from "./features/not-found";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components-demo" element={<ComponentsDemo />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
