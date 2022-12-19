import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import EmployeeDetail from "./Pages/EmployeeDetail";
import Home from "./Pages/Home";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/employee-detail/:id" element={<EmployeeDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;