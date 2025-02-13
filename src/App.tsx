import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route , RouterProvider} from "react-router-dom";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";

function App() {
  return (
   
    <Router>
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
    </Router>

  );
}

export default App;
