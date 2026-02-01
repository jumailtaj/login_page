// Import Express to create a router
import express from "express";

// Create a new router instance to define authentication routes
const router = express.Router();

// Import the loginuser controller function from authcontroller
import { loginuser } from "../controllers/authcontroller.js";

// Define POST route for /login endpoint that calls the loginuser controller
// When a POST request is made to /api/login, the loginuser function handles it
router.post("/login", loginuser);

// Export the router so it can be used in the main server file
export default router;
