
import React, { useState } from "react";
import "../asets/login.css";
// import { Link, useHistory } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const mockLogin = () => {
    // Mock user credentials
    // const mockUser = {
    //   email: "test@example.com",
    //   password: "password123",
    // };

    // // Check if entered credentials match the mock user
    // if (email === mockUser.email && password === mockUser.password) {
    //   // Simulate successful login
    //   history.push("/home", { state: { id: email } });
    // } else {
    //   // Simulate failed login
    //   setError("Invalid email or password. Please try again.");
    // }
    const mockUser = {
      email: "test@example.com",
      password: "password123",
    };
    
    if (email === mockUser.email && password === mockUser.password) {
      // Simulate successful login
      history.push("/home", { state: { id: email } });
    } else {
      // Simulate failed login
      setError("Invalid email or password. Please try again.");
    }
    
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login process
    mockLogin();
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Login</p>

        <label>
          <input
            required
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>

        <button type="submit" className="submit">
          Submit
        </button>

        {error && <p className="error">{error}</p>}

        <p>Don't have an account?</p>
        <Link to="/signup" className="submit">
          Signup Here
        </Link>
      </form>
    </div>
  );
};

export default Login;
