import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//useState to hold the data of these variables
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // have to enter all inputs required
        if (!name || !email || !password) {
            setError("All fields are required");
            return;
        }

        // used correct email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email format");
            return;
        }

        // Save user details to localStorage 
        const userDetails = { name, email, password };
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        setError("");

        // Redirect to login page
        console.log("Registration successful! Please log in.");
        navigate("/login"); 
    };

    return (
        <div style={{ margin: "50px auto", maxWidth: "400px", textAlign: "center" }}>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <div style={{ marginBottom: "15px" }}>
                    <label>Name:</label>
                    <input className="input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ width: "100%", padding: "10px", margin: "5px 0" }}
                    />
                </div>
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
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
