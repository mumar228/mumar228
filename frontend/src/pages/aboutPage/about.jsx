import React from "react";
import "./about.css"
import { Link } from "react-router-dom";
import todoImg from "../../img/img_todo.png"; // Fayl nomini to'g'rilaymiz
import logo from "../../img/logo1.png"; // Fayl nomini to'g'rilaymiz
const about = () => {
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
              <Link className="list-link" to="/my-todo">my todo</Link>
            </nav>

            <div className="btn">
              <button className="btn1">Login</button>
              <button className="btn2">register</button>
            </div>
          </div>
        </div>
      </header>
      <main>

        <section>
          <div className="about-container">
            <div className="big-text-page">
              <h1 className="center">About Todo.App</h1>

              <div className="text1">
                <h2>What is todo?</h2>
                <p>
                  A TODO (short for "to do") generally refers to any task, duty,
                  or item that needs to be accomplished. It most commonly refers
                  to a to-do list, which is a simple, prioritized collection of
                  tasks used to improve organization, memory, and productivity.
                </p>
              </div>
              <div className="text2">
                <h2>Our Mission</h2>
                <p>
                  At Todo, our mission is simple: to help you clear the mental
                  clutter and bring order to your daily life. We believe that
                  productivity shouldn't be complicated. That's why we designed
                  a clean, intuitive, and powerful to-do application that allows
                  you to effortlessly capture your thoughts, prioritize your
                  tasks, and track your journey from chaos to accomplishment.
                </p>
              </div>
              <div className="text3">
                <h2>The Developer</h2>
                <p>
                  TaskFlow was built with passion by an aspiring developer
                  dedicated to creating meaningful, user-centric web
                  applications. This platform combines modern frontend
                  architecture with seamless database integration to provide a
                  reliable, lightning-fast user experience.
                </p>
              </div>
              <div className="text4">
                <h2>Why Choose Our Todo App?</h2>
                <p>
                  Keeping everything in your head causes stress and
                  forgetfulness. By writing down your tasks, you clear your
                  mind, reduce anxiety, and gain absolute clarity on your daily
                  responsibilities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default about;
