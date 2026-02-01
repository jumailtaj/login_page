// Import the User model to interact with the users collection in MongoDB
import User from "../models/user.js";

// Import bcrypt library to compare hashed passwords
import bcrypt from "bcrypt";

// Import jsonwebtoken library to create authentication tokens
import jwt from "jsonwebtoken";

// Controller function to handle user login
export const loginuser = async (req, res) => {
    try {
        // Extract email and password from the request body
        const { email, password } = req.body;

        // Find a user in the database with the provided email
        const foundUser = await User.findOne({ email });

        // If no user is found with that email, return an error response
        if (!foundUser) {
            return res.status(400).json({ message: "user does not exist" });
        }

        // Compare the provided password with the hashed password stored in database
        const ismatch = await bcrypt.compare(password, foundUser.password);

        // If passwords don't match, return an error response
        if (!ismatch) {
            return res.status(400).json({ message: "invalid credentials" });
        }

        // Create a JWT token with the user's ID, signed with the secret key, expires in 1 hour
        const token = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // Send success response with the generated token
        res.json({ token, message: "Login successful" });

    } catch (error) {
        // If any error occurs, send error response with the error message
        res.status(500).json({ error: error.message });
    }
};
