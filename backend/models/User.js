const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: 6,
            select: false, //Passwords will never be returned unless we explicitly ask for it.
        },

        role: {
            type: String,
            enum: ["admin", "hr", "employee"],
            default: "employee",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);