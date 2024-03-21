

import React, { useState } from 'react';
import "../asets/login.css";
import { Link, useNavigate, } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const mockSignup = () => {
        // Simulate successful signup
        navigate("/home", { state: { id: email } });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate signup process
        mockSignup();
    };

    return (
        <div className="signup-container">
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">Register</p>
                <p className="message">Signup now and get full access to our app.</p>
                
                <label>
                    <input
                        required
                        placeholder=""
                        type="text"
                        className="input"
                        id="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    <span>Name</span>
                </label>

                <label>
                    <input
                        required
                        type="email"
                        className="input"
                        id="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <span>Email</span>
                </label>

                <label>
                    <input
                        required
                        type="password"
                        className="input"
                        id="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <span>Password</span>
                </label>

                <button type="submit" className="submit">Submit</button>

                {error && <p className="error">{error}</p>}

                <Link to='/' className='submit'>Login</Link>
            </form>
        </div>
    )
}

export default Signup;

