// Import useState hook from React to manage component state
import { useState } from 'react';

// Import the Login component from the components folder
import Login from '../components/login.jsx';

// Import CSS styles for the App component
import './App.css';

// Main App component - the root component of the application
function App() {
  // Return the JSX for the main application
  return (
    <>
      {/* Main container div for the application */}
      <div>
        {/* Application title */}
        <h1>Login Application</h1>

        {/* Render the Login component */}
        <Login />
      </div>
    </>
  );
}

// Export the App component as default export
export default App;
