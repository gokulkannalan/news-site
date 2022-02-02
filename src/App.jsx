import React from "react";

import Appbar from "./Components/Appbar";
import Home from "./Components/Home";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Business from "./Components/Business";
import Sports from "./Components/Sports/Sports";
import Science from "./Components/Science/Science";
import Entertainment from "./Components/Entertainment/Entertainment";
import Footer from "./Components/Footer/Footer";
import SearchNews from "./Components/SearchNews/SearchNews";
function App() {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/science" element={<Science />} />
          <Route path="/search" element={<SearchNews />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
