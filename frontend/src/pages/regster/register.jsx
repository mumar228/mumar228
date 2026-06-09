import React, { useState } from "react";
import axios from "axios";
import "./register.css"
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    // role: "user",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://mumar228.onrender.com/api/user/register", {
        ...form,
        age: Number(form.age),
      });
      setMessage("Muvaffaqiyatli ro'yxatdan o'tdingiz! ✅");
      console.log(response.data);
      navigate("/");
    } catch (error) {
      setMessage(error.response?.data?.message || "Xatolik yuz berdi ❌");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2 className="regsiter-center">Ro'yxatdan o'tish</h2>
        <p>Yangi hisob yarating</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input name="name" placeholder="Ism" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Parol" onChange={handleChange} />
            <input name="age" type="number" placeholder="Yosh (ixtiyoriy)" onChange={handleChange} />
          </div>
          <button className="login-btn" type="submit">
            Ro'yxatdan o'tish
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <div className="register-link">
          Hisobingiz bormi? <a href="/login">Kirish</a>
        </div>
      </div>
    </div>
  );
}

export default Register;