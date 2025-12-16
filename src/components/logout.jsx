import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return <button className="btn" onClick={handleLogout}>Logout</button>;
}

export default Logout;
