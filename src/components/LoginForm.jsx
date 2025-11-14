import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(email, password);

    if (result.success) {
      if (result.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/"); // Go to homepage
      }
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "350px", borderRadius: "20px" }}>
        <h3 className="text-center mb-3" style={{ color: "#f27777", fontFamily: "Quicksand" }}>
          Welcome Back!
        </h3>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-danger small">{error}</p>}

          <button type="submit" className="btn w-100 mt-2" style={{ background: "#f27777", color: "white" }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;