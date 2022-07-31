import "./global.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth, Home, Profile } from "./pages";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </Router>
    )
}

export default App