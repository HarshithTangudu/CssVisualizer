// filepath: d:\myprojects\cssvisualizer\cssvisualizer\src\App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import BoxModel from "./Pages/BoxModel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/box-model" element={<BoxModel />} />
      </Routes>
    </Router>
  );
}

export default App;