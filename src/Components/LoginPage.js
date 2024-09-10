import React, { useState } from "react"; // Import React and the useState hook from React
import axios from "axios"; // Import axios for making HTTP requests

const App = () => {
  // State to hold the form data for email and password
  const [data, setData] = useState({
    email: "", // Initial value for email
    password: "", // Initial value for password
  });

  // Function to handle changes in the input fields
  const handleChange = (e) => {
    const value = e.target.value; // Get the value from the input field
    setData({
      ...data, // Spread the existing data
      [e.target.name]: value, // Update the specific field based on the input name
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const userData = {
      email: data.email, // Prepare user data to send
      password: data.password,
    };

    // Make a POST request to the login API
    axios.post("https://reqres.in/api/login", userData).then((response) => {
      // Log the response status and token if the request is successful
      console.log(response.status, response.data.token);
    });
  };

  return (
    <div>
      <h1>Login Account</h1> {/* Header for the login form */}
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Form element with onSubmit handler */}
        <label htmlFor="email">
          {" "}
          {/* Label for the email input */}
          Email
          <input
            type="email" // Input type for email
            name="email" // Name attribute for the input
            value={data.email} // Controlled input value
            onChange={handleChange} // Handler for input changes
            required // Makes this field mandatory
          />
        </label>
        <label htmlFor="password">
          {" "}
          {/* Label for the password input */}
          Password
          <input
            type="password" // Input type for password
            name="password" // Name attribute for the input
            value={data.password} // Controlled input value
            onChange={handleChange} // Handler for input changes
            required // Makes this field mandatory
          />
        </label>
        <button type="submit">Login</button> {/* Submit button for the form */}
      </form>
    </div>
  );
};

export default App; // Export the App component for use in other files
