import React from "react";

const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} Heritage Akinbowale. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
