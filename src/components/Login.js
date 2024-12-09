import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//useNavigate is used to navigate to a page depending on the condition 
//here say register is successful & login

const Login = ({setIsAuthenticated}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // validation to see email correct or not
        if (!email || !password) {
            setError("Email and Password are required");
            return;
        }

        //using localStorage to store the user details
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));

        // see if the format of the amail is correct
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email format");
            return;
        }

        //checking to see if details match
        if (!userDetails || userDetails.email !== email || userDetails.password !== password) {
            setError("Invalid email or password");
            return;
        }

        // set authentication to true and navigate to home if true
        setIsAuthenticated(true);
        setError("");
        navigate("/home");
    };

    return (
        <div style={{ margin: "50px auto", maxWidth: "400px", textAlign: "center" }}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: "15px" }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: "100%", padding: "10px", margin: "5px 0" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: "100%", padding: "10px", margin: "5px 0" }}
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit" style={{ padding: "10px 20px" }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;

