// Import the Express framework to create the web server
import express from "express";

// Import dotenv to load environment variables from .env file
import dotenv from "dotenv";

// Import CORS middleware to allow cross-origin requests from the frontend
import cors from "cors";

// Import mongoose to connect to MongoDB database
import mongoose from "mongoose";

// Import authentication routes
import authRoutes from "./routes/authroutes.js";

// Load environment variables from .env file into process.env
dotenv.config();

// Create an Express application instance
const app = express();

// Database connection function
const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection string from environment variables
        await mongoose.connect(process.env.MONGO_URI);
        // Log success message when database connection is established
        console.log("MongoDB connected successfully");
    } catch (error) {
        // Log error message if database connection fails
        console.error("MongoDB connection error:", error.message);
        // Exit the process with failure code if database connection fails
        process.exit(1);
    }
};

// Call the database connection function
connectDB();

// Enable CORS middleware to allow requests from different origins (frontend)
app.use(cors());

// Enable JSON body parser middleware to parse incoming JSON request bodies
app.use(express.json());

// Mount authentication routes at /api path
app.use("/api", authRoutes);

// Get the PORT from environment variables or use 8000 as default
const PORT = process.env.PORT || 8000;

// Start the server and listen on the specified PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));