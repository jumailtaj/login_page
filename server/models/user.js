// Import mongoose library to define database models
import mongoose from "mongoose";

// Define the user schema structure for MongoDB
const userschema = new mongoose.Schema({
    // Email field: must be a string, is required, and must be unique
    email: { type: String, required: true, unique: true },
    // Password field: must be a string and is required
    password: { type: String, required: true }
});

// Create and export the User model based on the userschema
export default mongoose.model('user', userschema);

