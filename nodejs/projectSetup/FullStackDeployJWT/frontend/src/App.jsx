// src/App.jsx
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "./PrivateRoute";


axios.defaults.withCredentials = true;

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const res = await axios.post("http://localhost:4000/auth/refresh-token");
        setAccessToken(res.data.accessToken);
      } catch (err) {
        console.log("Not logged in");
      } finally {
        setLoading(false);
      }
    };

    refreshAccessToken();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute accessToken={accessToken}>
              <Home setAccessToken={setAccessToken} />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login setAccessToken={setAccessToken} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
