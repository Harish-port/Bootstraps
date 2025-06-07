// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = ({ setAccessToken }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:4000/auth/logout");
      setAccessToken("");
      navigate("/login");
    } catch (err) {
      alert("Logout failed");
    }
  };

  return (
    <div>
      <h1>Welcome to Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
