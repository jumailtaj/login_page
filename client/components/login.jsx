// Import useState hook from React to manage component state
import { useState } from "react";

// Import axios library to make HTTP requests to the backend
import axios from "axios";

// Login component - handles user authentication
function Login() {
    // State variable to store the email input value
    const [email, setemail] = useState("");

    // State variable to store the password input value
    const [password, setpassword] = useState("");

    // Function to handle login form submission
    const handlelogin = async (e) => {
        // Prevent the default form submission behavior (page reload)
        e.preventDefault();

        try {
            // Send POST request to backend login endpoint with email and password
            const response = await axios.post("http://localhost:8000/api/login", { email, password });

            // Store the received JWT token in browser's localStorage
            localStorage.setItem("token", response.data.token);

            // Show success message to the user
            alert("login successful");
        } catch (error) {
            // If login fails, show error message to the user
            // Check if error response exists, otherwise show generic error
            alert(error.response?.data?.message || error.message);
        }
    };

    // Return the JSX for the login form
    return (
        <form onSubmit={handlelogin}>
            {/* Email input field - controlled component bound to email state */}
            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
            />

            {/* Password input field - controlled component bound to password state */}
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
            />

            {/* Submit button to trigger form submission */}
            <button type="submit">Login</button>
        </form>
    );
}

// Export the Login component as default export
export default Login;
