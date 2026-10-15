


// //server.js file for first program
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// // Import authentication routes
// const authRoutes = require("./routes/authRoutes");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Test route
// app.get("/", (req, res) => {
//     res.json({
//         message: "StudentMart API is running"
//     });
// });

// // Connect authentication routes
// app.use("/api/auth", authRoutes);


// // console.log("Authentication routes loaded");

// app.use((req, res, next) => {
//     console.log("Incoming request:", req.method, req.originalUrl);
//     next();
// });

// // Connect to MongoDB
// mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => {
//         console.log("MongoDB connected");

//         app.listen(process.env.PORT || 5002, () => {
//             console.log(
//                 `Server running on http://localhost:${process.env.PORT || 5002}`
//             );
//         });
//     })
//     .catch((error) => {
//         console.error(
//             "MongoDB connection failed:",
//             error.message
//         );
//     });







//server.js file for second program

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "StudentMart API is running"
    });
});

app.use((req, res, next) => {
    console.log("Incoming request:", req.method, req.originalUrl);
    next();
});

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

// Return JSON for unknown API routes.
app.use("/api", (req, res) => {
    res.status(404).json({
        message: "API endpoint not found"
    });
});

const PORT = process.env.PORT || 5002;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });
