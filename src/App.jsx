import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Curriculum from "./components/Curriculum/Curriculum";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route index element={<Curriculum />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contato" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>

    </>
  )
}

export default App;
