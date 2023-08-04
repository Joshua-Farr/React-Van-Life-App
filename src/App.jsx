import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MainContent from "./MainContent";
import About from "./Components/About";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
}
