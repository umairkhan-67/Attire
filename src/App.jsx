import React, { useState } from 'react';
import {Routes, Route } from 'react-router-dom';

import "./App.css";
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About'; // Import the new About page

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
   </>
  );
}

export default App;