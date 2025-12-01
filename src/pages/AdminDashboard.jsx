import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all users
    fetch("http://localhost:5001/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    // Fetch all products
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>

      <h4 className="mt-4">Users</h4>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email} - {u.role} - {u.active ? "Active" : "Inactive"}
          </li>
        ))}
      </ul>

      <h4 className="mt-4">Products</h4>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ₹{p.price} - {p.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
