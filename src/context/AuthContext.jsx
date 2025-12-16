import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Optional: additional hard-coded users (still supported)
  const customUsers = [
    {
      id: "custom-1",
      name: "Outside User",
      email: "sukrta@gmail.com",
      password: "MyOwnPass@123",
      role: "user",
      active: true,
    },
    {
      id: "custom-admin-1",
      name: "Second Admin",
      email: "admin2@gmail.com",
      password: "AdminPass@123",
      role: "admin",
      active: true,
    },
  ];

  // Load saved user from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  // Helper: fetch users from JSON server (returns array or [])
  const fetchUsersFromServer = async () => {
    try {
      const res = await fetch("http://localhost:5000/users");
      if (!res.ok) return [];
      const users = await res.json();
      return Array.isArray(users) ? users : [];
    } catch (err) {
      console.error("fetchUsersFromServer error:", err);
      return [];
    }
  };

  // LOGIN: email + password. Optional role to require (e.g. "admin")
  const login = async (email, password, role = null) => {
    try {
      const serverUsers = await fetchUsersFromServer();

      // find in server users
      let foundUser = serverUsers.find(
        (u) => u.email === email && u.password === password
      );

      // fallback to custom users
      if (!foundUser) {
        foundUser = customUsers.find(
          (u) => u.email === email && u.password === password
        );
      }

      if (!foundUser) {
        return { success: false, message: "Invalid email or password" };
      }

      if (!foundUser.active) {
        return { success: false, message: "Account is inactive" };
      }

      if (role && foundUser.role !== role) {
        return { success: false, message: "Not authorized for this area" };
      }

      // Save to state + localStorage
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));

      return { success: true, user: foundUser };
    } catch (err) {
      console.error("login error:", err);
      return { success: false, message: "Login failed. Please try again." };
    }
  };

  // REGISTER: create new user on JSON server (role defaults to "user")
  const register = async ({ name, email, password }) => {
    try {
      // Basic validation
      if (!name || !email || !password) {
        return { success: false, message: "All fields are required." };
      }

      // fetch existing users from server
      const serverUsers = await fetchUsersFromServer();

      // check duplicates in server and custom users
      const existsServer = serverUsers.some((u) => u.email === email);
      const existsCustom = customUsers.some((u) => u.email === email);

      if (existsServer || existsCustom) {
        return { success: false, message: "Email already registered." };
      }

      // Create user object
      const newUser = {
        id: Date.now().toString(), // simple id
        name,
        email,
        password,
        role: "user",
        active: true,
      };

      // POST to JSON server
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!res.ok) {
        console.error("register: server returned not ok", res.status);
        return { success: false, message: "Registration failed." };
      }

      const saved = await res.json();

      // Optionally auto-login the new user:
      setUser(saved);
      localStorage.setItem("user", JSON.stringify(saved));

      return { success: true, user: saved };
    } catch (err) {
      console.error("register error:", err);
      return { success: false, message: "Registration failed. Try again." };
    }
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
