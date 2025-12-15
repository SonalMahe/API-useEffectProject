import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function userLogin(e) {
        e.preventDefault();

        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || {};

        // Check credentials
        if (users[username] && users[username] === password) {
            // Store logged-in user
            localStorage.setItem("loggedInUser", username);

            alert("Successfully Logged In");
            navigate("/randomUser");

        } else {
            alert("Invalid username or password");

        }
    }

    return (
        <>
            <h1>User Login</h1>

            <form onSubmit={userLogin}>
                <input type="text" placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <input type="password" placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>
                <button onClick={() => navigate("/register")}>Register</button>
            </form>

        </>
    );
}

export default Login;
