function Logout() {
  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully");
  }

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
