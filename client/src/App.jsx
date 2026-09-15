import { useState } from "react";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import "./App.css";

function App() {

    const [page, setPage] = useState("login");

    const handleRegisterSuccess = () => {
        setPage("login");
    };

    const handleLoginSuccess = () => {
        setPage("dashboard");
    };

    const handleLogout = () => {

        localStorage.removeItem("user");

        setPage("login");
    };

    return (
        <div className="app">

            {page === "register" && (
                <Register
                    onRegisterSuccess={handleRegisterSuccess}
                />
            )}

            {page === "login" && (
                <Login
                    onLoginSuccess={handleLoginSuccess}
                    onRegister={() => setPage("register")}
                />
            )}

            {page === "dashboard" && (
                <Dashboard
                    onLogout={handleLogout}
                />
            )}

        </div>
    );
}

export default App;