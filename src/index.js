import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";
import Friends from "./pages/Friends/Friends";
import SignUp from "./pages/Signup/SignUp";
import Login from "./pages/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='profile' element={<Profile />} />
          <Route path='about' element={<About />} />
          <Route path='friends' element={<Friends />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='*' element={<Navigate to={"login"} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
