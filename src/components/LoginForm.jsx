import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = ({ role = null }) => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await login(email, password, role);

    if (result.success) {
      if (role === "admin") {
        navigate("/"); // redirect admin
      } else {
        navigate("/"); // redirect user
      }
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "350px", borderRadius: "20px" }}>
        <h3 className="text-center mb-3" style={{ color: "#f27777", fontFamily: "Quicksand" }}>
          {role === "admin" ? "Admin Login" : "Welcome Back!"}
        </h3>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-danger small">{error}</p>}

          <button
            type="submit"
            className="btn w-100 mt-2"
            style={{ background: "#f27777", color: "white" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
