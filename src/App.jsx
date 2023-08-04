import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MainContent from "./MainContent";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <MainContent />
      <Footer />
    </BrowserRouter>
  );
}
