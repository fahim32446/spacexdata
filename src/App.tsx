import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" component={Home} />
        <Route path="/details/:id" component={Details} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
