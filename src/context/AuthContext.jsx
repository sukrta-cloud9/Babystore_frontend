import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //  Login function
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
    } catch (err) {
      console.error("Login error:", err);
      return { success: false, message: "Something went wrong!" };
    }
  };

  //  Logout
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