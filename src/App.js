import "./global.scss";
import GlobalContextProvider from "./context/useGlobalContext";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth, Home, Profile, SearchUser } from "./pages";
import { getRandomNumber } from "./utils/utils";

function App() {
    const [user, setUser] = React.useState(
        {
            id: '135jfh',
            name: "John Doe1",
            avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
            country: 'India',
            country_flag: `https://countryflagsapi.com/png/india`
        },
    );
    const context_to_be_passed = {
        user, setUser
    }
    return (
        <GlobalContextProvider context={context_to_be_passed}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/searchUser" element={<SearchUser />} />
                </Routes>
            </Router>
        </GlobalContextProvider>
    )
}

export default App