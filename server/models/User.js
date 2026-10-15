

// //user.js file for first program

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({

//     name: {
//         type: String,
//         required: true
//     },

//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },

//     password: {
//         type: String,
//         required: true
//     }

// });

// module.exports =
//     mongoose.model("User", userSchema);





//user.js file for second program

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        password: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            default: ""
        },

        department: {
            type: String,
            default: ""
        },

        year: {
            type: String,
            default: ""
        },

        address: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);
