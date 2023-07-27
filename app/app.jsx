import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Company from "./components/Company";
import Contact from "./components/Contact";

import "./styles/app.css";

createRoot(document.getElementById("app")).render(
  <HashRouter>
    <Main>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/LearnMore" element={<Company />} />
        <Route path="/Contact" element={<Contact />} />
        <Route index element={<Intro />} />
      </Routes>
    </Main>
  </HashRouter>
);
