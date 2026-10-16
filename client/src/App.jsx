

// //app.jsx for first program
// import { useState } from "react";

// import Register from "./components/Register";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";

// import "./App.css";

// function App() {

//     const [page, setPage] = useState("login");

//     const handleRegisterSuccess = () => {
//         setPage("login");
//     };

//     const handleLoginSuccess = () => {
//         setPage("dashboard");
//     };

//     const handleLogout = () => {

//         localStorage.removeItem("user");

//         setPage("login");
//     };

//     return (
//         <div className="app">

//             {page === "register" && (
//                 <Register
//                     onRegisterSuccess={handleRegisterSuccess}
//                 />
//             )}

//             {page === "login" && (
//                 <Login
//                     onLoginSuccess={handleLoginSuccess}
//                     onRegister={() => setPage("register")}
//                 />
//             )}

//             {page === "dashboard" && (
//                 <Dashboard
//                     onLogout={handleLogout}
//                 />
//             )}

//         </div>
//     );
// }

// export default App;





// //app.jsx for second program

// import { useState } from "react";

// import Register from "./components/Register";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import Logout from "./components/Logout";

// import "./App.css";

// function App() {
//     const [page, setPage] = useState("login");

//     const handleRegisterSuccess = () => {
//         setPage("login");
//     };

//     const handleLoginSuccess = () => {
//         setPage("dashboard");
//     };

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         setPage("login");
//     };

//     return (
//         <div className="app">
//             {page === "register" && (
//                 <Register
//                     onRegisterSuccess={handleRegisterSuccess}
//                 />
//             )}

//             {page === "login" && (
//                 <Login
//                     onLoginSuccess={handleLoginSuccess}
//                     onRegister={() => setPage("register")}
//                 />
//             )}

//             {page === "dashboard" && (
//                 <Dashboard onLogout={handleLogout} />
//             )}
//         </div>
//     );
// }

// export default App;





//app.jsx for third program

import { useState } from "react";

import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import ProductGrid from "./components/ProductGrid";
import ProductForm from "./components/ProductForm";
import ProductDetails from "./components/ProductDetails";

import "./App.css";

function App() {
    const [page, setPage] = useState("login");
    const [productId, setProductId] = useState(null);

    const handleRegisterSuccess = () => {
        setPage("login");
    };

    const handleLoginSuccess = () => {
        setPage("dashboard");
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setPage("login");
    };

    const handleViewProductDetails = (id) => {
        setProductId(id);
        setPage("productDetails");
    };

    const handleProductAdded = () => {
        setPage("products");
    };

    // Login and registration screens
    if (page === "login") {
        return (
            <div className="app">
                <Login
                    onLoginSuccess={handleLoginSuccess}
                    onRegister={() => setPage("register")}
                />
            </div>
        );
    }

    if (page === "register") {
        return (
            <div className="app">
                <Register
                    onRegisterSuccess={handleRegisterSuccess}
                />
            </div>
        );
    }

    // Main dashboard layout
    return (
        <div className="app dashboard-layout">
            <aside className="sidebar">
                <div className="sidebar-brand">
                    <span className="brand-icon">S</span>
                    <span>StudentMart</span>
                </div>

                <p className="sidebar-label">MAIN MENU</p>

                <button
                    className={`sidebar-link ${
                        page === "dashboard" ? "active" : ""
                    }`}
                    onClick={() => setPage("dashboard")}
                >
                    <span>👤</span>
                    Profile
                </button>

                <button
                    className={`sidebar-link ${
                        page === "addProduct" ? "active" : ""
                    }`}
                    onClick={() => setPage("addProduct")}
                >
                    <span>➕</span>
                    Add Product
                </button>

                <button
                    className={`sidebar-link ${
                        page === "products" ||
                        page === "productDetails"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => setPage("products")}
                >
                    <span>🛍️</span>
                    View Products
                </button>

                <div className="sidebar-bottom">
                    <button
                        className="sidebar-link logout-link"
                        onClick={handleLogout}
                    >
                        <span>↪</span>
                        Logout
                    </button>
                </div>
            </aside>

            <main className="dashboard-main">
                {page === "dashboard" && (
                    <Dashboard onLogout={handleLogout} />
                )}

                {page === "products" && (
                    <ProductGrid
                        onViewDetails={handleViewProductDetails}
                    />
                )}

                {page === "addProduct" && (
                    <ProductForm
                        onProductAdded={handleProductAdded}
                        onCancel={() => setPage("products")}
                    />
                )}

                {page === "productDetails" && (
                    <ProductDetails
                        productId={productId}
                        onBack={() => setPage("products")}
                    />
                )}
            </main>
        </div>
    );
}

export default App;
