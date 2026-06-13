import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Features/LandingPage";
import Login from "./Features/Auth/pages/Login";
import Register from "./Features/Auth/pages/Register";
import Feed from "./Features/Post/pages/Feed";
import ProtectedRoute from "./Features/Auth/components/ProtectedRoute";
import PublicRoute from "./Features/Auth/components/PublicRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        
        <Route path="/feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

