import React, { useState } from "react";
import axios from "axios";
import "./login.css";
function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/login", form);
      const { token, refreshToken, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));

      setMessage(`Xush kelibsiz, ${user.name}! ✅`);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Email yoki parol noto'g'ri ❌",
      );
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Kirish</h2>
        <p>Hisobingizga kiring</p>
        <form onSubmit={handleSubmit}>  
          <div className="input-group">
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input
              name="password"
              type="password"
              placeholder="Parol"
              onChange={handleChange}
            />
          </div>
          <button className="login-btn" type="submit">
            Kirish
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <div className="register-link">
          Hisob yo'qmi? <a href="/register">Ro'yxatdan o'ting</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
