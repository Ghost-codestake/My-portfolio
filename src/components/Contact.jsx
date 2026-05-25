import { Computer, BanknoteX, Mail } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-text">
            <p>
              I'm always open to discussing new opportunities, creative projects, 
              or just having a chat about web development. Feel free to reach out!
            </p>
            <div className="social-links">
              <a href="https://github.com/Ghost-codestake" className="social-link">
                <Computer size={24} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/heritage-akinbowale" className="social-link">
                <BanknoteX  size={24} />
                LinkedIn
              </a>
              <a href="mailto:victorheritage202@gmail.com" className="social-link">
                <Mail size={24} />
                Email
              </a>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button onClick={handleSubmit} className="submit-button">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
