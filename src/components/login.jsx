import React from "react";
import {useNavigate} from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function userLogin(e) {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users") || "{}");

        if (users[username] && users[username] === password) {
            localStorage.setItem("loggedIn", username);

            alert("Successfully Logged In");
            localStorage.setItem("loggedIn", true);
            navigate ("/randomUser")

        } else {
            alert("Invalid username or password");
        }
    }
  return (
    <div className="auth-container">
      <h2> User-Login</h2>

      <form onSubmit={userLogin}>
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

        <button type="submit">Login</button>
        <button onClick={() => navigate("/randomUser")} style={{ marginTop: "10px" }}>
        </button>
      </form>

      <Logout />
    </div>
  );
}