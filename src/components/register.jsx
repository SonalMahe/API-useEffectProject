import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleRegister(e) {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users") || "{}");

        if (users[username]) {
            alert("User already exists!");
            return;
        }

        users[username] = password;
        localStorage.setItem("users", JSON.stringify(users));

        alert("Account created!Click login");
        navigate("/login");
    }

    return (
        <>
            <h1>Create Account</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Register</button>

                <button onClick={() => navigate("/login")} style={{ color: "#ec5656ff" }}>  Back to Login
                </button>
            </form>
        </>
    );
}
export default Register;