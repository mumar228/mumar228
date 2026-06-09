import React from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import todoImg from "../../img/img_todo.png"; 
import logo from "../../img/logo1.jpg";  
const Navbar = () => {
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
              <Link className="btn1" to="/login">Login</Link>
              <Link className="btn2" to="/register">register</Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="big">
              <div className="text">
                <h2>Welcome to todo App</h2>
                <p>
                  Transform your daily routine into a path of success. Break
                  down your big goals into manageable tasks, set your priorities
                  straight, and track your progress daily. Say goodbye to mental
                  clutter and hello to a more organized, productive, and
                  stress-free life.
                </p>
                <button>create todo</button>
              </div>

              <div>
                <img
                  className="img_todo"
                  src={todoImg}
                  alt="Todo App Illustration"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Navbar;
