import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h3>Heritage</h3>
        </div>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <a onClick={() => scrollToSection("home")}>Home</a>
          <a onClick={() => scrollToSection("about")}>About</a>
          <a onClick={() => scrollToSection("projects")}>Projects</a>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
