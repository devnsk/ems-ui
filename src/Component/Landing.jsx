import React from "react";
import { FiBell, FiUser } from "react-icons/fi"; 
import "./Landing.css";

const Landing = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Admin Page</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Employees</li>
            <li>Department</li>
            <li>HR</li>
          </ul>
        </nav>
        <button className="logout">Logout</button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Navigation Bar */}
        <header className="topbar">
          <div className="brand">
            <img src="intense logo.png" alt="Logo" className="logo-img" />
            <span className="name">Intense Technology Ltd.</span>
          </div>
          <div className="right-menu">
            <button className="notification-btn">
              <FiBell size={20} />
            </button>
            <button className="profile-btn">
              <FiUser size={20} />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <section className="content">
          <h1>Welcome to the Dashboard</h1>
        </section>
      </main>
    </div>
  );
};

export default Landing;
