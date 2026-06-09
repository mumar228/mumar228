import React, { useState } from "react";
import axios from "axios";
import "./create.css";
import todoImg from "../../img/img_todo.png";
import logo from "../../img/logo1.jpg"; 
import { Link } from 'react-router-dom';
function CreateTodo() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (taskTitle.trim().length < 2 || taskDescription.trim().length < 2) {
      setMessage(
        "Title va Description kamida 2 ta harfdan iborat bo'lishi kerak!",
      );
      return;
    }

    try {
      const token = localStorage.getItem("token"); // ← qo'shildi

      const response = await axios.post(
        "https://mumar228.onrender.com/api/todos",
        {
          title: taskTitle,
          description: taskDescription,
        },
        {
          headers: { Authorization: `Bearer ${token}` }, // ← qo'shildi
        },
      );

      if (response.status === 200 || response.status === 201) {
        setMessage("Vazifa muvaffaqiyatli saqlandi! ✅");
        setTaskTitle("");
        setTaskDescription("");
      }
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      if (error.response) {
        setMessage(`Backend xatosi: ${error.response.data.message}`);
      } else {
        setMessage("Backend bilan ulanishda xato! ❌");
      }
    }
  };
  return (
    <div>
    <header>
        <div className="controler">
          <div className="header-big">
            <img className="logo-img" src={logo} alt="salom" />

            <nav className="nav-links">
              <Link className="list-link" to="/">
                Home
              </Link>
              <Link className="list-link" to="/about">
                About
              </Link>
              <Link className="list-link" to="/create">
                Create todo
              </Link>
              <Link className="list-link" to="/my-todos">
                my todo
              </Link>
            </nav>

            <div className="btn">
              <button className="btn1">Login</button>
              <button className="btn2">register</button>
            </div>
          </div>
        </div>
    </header>
    <div className="create-wrapper">
      <div className="create-card">
        <h2>Yangi vazifa qo'shish</h2>
        <form className="create-form" onSubmit={handleSubmit}>
          <div>
            <label>Vazifa nomi:</label>
            <input
              type="text"
              placeholder="Masalan: Bozorga borish"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Tavsif:</label>
            <input
              type="text"
              placeholder="Masalan: Meva sotib olish"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>
          <button className="create-btn" type="submit">
            Databazaga qo'shish
          </button>
        </form>
        {message && <p className="create-message">{message}</p>}
      </div>
    </div>
    </div>
  );
}

export default CreateTodo;
