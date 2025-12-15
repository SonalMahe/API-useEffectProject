import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/components/login.jsx";
import RandomUser from "../src/components/randomUser.jsx";
import Register from "./components/register.jsx";

function App() {
  const isLoggedIn = localStorage.getItem("loggedInUser");

  return (
    <BrowserRouter>
      <Routes>
         
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path= "/register" element={<Register /> } />

        <Route
          path="/randomUser"
          element={
            isLoggedIn ? <RandomUser /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
