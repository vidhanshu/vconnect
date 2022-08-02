import "./global.scss";
import GlobalContextProvider from "./context/useGlobalContext";
import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Loading } from "./components";
import { Auth, Home, Profile, SearchUser } from "./pages";

function App() {
    let userFromLocalStorage = localStorage.getItem('auth');
    if (userFromLocalStorage) {
        userFromLocalStorage = JSON.parse(userFromLocalStorage);
        userFromLocalStorage = userFromLocalStorage.user;
    } else {
        userFromLocalStorage = null;
    }
    const [user, setUser] = React.useState(userFromLocalStorage);
    const [loading, setLoading] = React.useState(false);
    const context_to_be_passed = {
        user, setUser, setLoading
    }
    return (
        <GlobalContextProvider context={context_to_be_passed}>
            <Loading loading={loading} />
            <Router>
                <Routes>
                    <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                    <Route path="/profile/:id" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/searchUser" element={<ProtectedRoute><SearchUser /></ProtectedRoute>} />
                </Routes>
            </Router>
        </GlobalContextProvider>
    )
}

const ProtectedRoute = ({ children }) => {
    let userFromLocalStorage = localStorage.getItem('auth');
    if (userFromLocalStorage) {
        userFromLocalStorage = JSON.parse(userFromLocalStorage);
    } else {
        userFromLocalStorage = null;
    }

    if (userFromLocalStorage) {
        return children;
    }
    return <Navigate to='/auth' />
}
export default App