import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // LOGIN
  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/users");
      const users = await res.json();

      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem("user", JSON.stringify(foundUser));
        return { success: true, user: foundUser };
      } else {
        return { success: false, message: "Invalid email or password" };
      }
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: "Something went wrong" };
    }
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ THIS WAS MISSING — must export
export const useAuth = () => useContext(AuthContext);
