import React, { useState, useEffect } from "react";
import axios from "axios";
import todoImg from "../../img/img_todo.png";
import logo from "../../img/logo1.jpg";
import { Link } from 'react-router-dom';

function MyTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const token = localStorage.getItem("token");
        
        // 🟢 O'ZGARTIRILGAN JOY: Endi vazifalar ro'yxati Render-dagi PostgreSQL bazangizdan keladi
        const response = await axios.get("https://mumar228.onrender.com/api/todos", {
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
    <div>
    <header>
        <div className="controler">
          <div className="header-big">
            <img className="logo-img" src={logo} alt="salom" />

            <nav className="nav-links">
              <Link className="list-link" to="/">Home</Link>
              <Link className="list-link" to="/about">About</Link>
              <Link className="list-link" to="/create">Create todo</Link>
              <Link className="list-link" to="/my-todos">my todo</Link>
            </nav>

            <div className="btn">
              <button className="btn1">Login</button>
              <button className="btn2">register</button>
            </div>
          </div>
        </div>
    </header>
    
    <div style={{ padding: "40px", maxWidth: "600px", margin: "60px auto", color: "white" }}>
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
            <h3 style={{ margin: "0 0 8px", color: "black" }}>{todo.title}</h3>
            <p style={{ margin: 0, color: "#64748b" }}>{todo.description}</p>
          </div>
        ))
      )}
    </div>
    </div>
  );
}

export default MyTodos;