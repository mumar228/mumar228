import React, { useState, useEffect } from "react";
import axios from "axios";

function MyTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/api/todos", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTodos(response.data);
      } catch (error) {
        console.error("Xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) return <p>Yuklanmoqda...</p>;

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "60px auto" }}>
      <h2>Mening vazifalarim</h2>
      {todos.length === 0 ? (
        <p>Hali vazifa qo'shilmagan!</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} style={{
            padding: "16px",
            marginBottom: "12px",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            backgroundColor: "#fff"
          }}>
            <h3 style={{ margin: "0 0 8px" }}>{todo.title}</h3>
            <p style={{ margin: 0, color: "#64748b" }}>{todo.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyTodos;