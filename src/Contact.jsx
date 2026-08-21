import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { contactsAPI } from "./utils/api";

export default function Contact() {
  // State management for form data
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  // Function to update form values as user types
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  }

  // Function to handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Basic form validation
    if (!form.firstname || !form.email) {
      setError("Please fill in your first name and email.");
      setLoading(false);
      return;
    }

    try {
      await contactsAPI.create({
        firstname: form.firstname,
        lastname: form.lastname || "",
        email: form.email
      });
      
      setSuccess("Message sent successfully!");
      setForm({ firstname: "", lastname: "", email: "" });
      
      // Redirect back to Home page after successful submission
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="page-title">Contact Me</h1>
        
        <div className="contact-main">
          {/* Contact Information Panel */}
          <div className="contact-info-panel">
            <h3>Get In Touch</h3>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:athavanyokanathan4@gmail.com">athavanyokanathan4@gmail.com</a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>Toronto, Ontario</span>
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong>
                <a href="https://www.linkedin.com/in/athavan-yokanathan-606213333/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/athavan-yokanathan
                </a>
              </div>
              <div className="contact-item">
                <strong>GitHub:</strong>
                <a href="https://github.com/Athavanyy" target="_blank" rel="noopener noreferrer">
                  github.com/Athavanyy
                </a>
              </div>
            </div>
            
            <div className="contact-hours">
              <h4>Available Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Weekend: By appointment</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <h3>Send Me a Message</h3>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input 
                  name="firstname" 
                  placeholder="First Name" 
                  value={form.firstname} 
                  onChange={handleChange} 
                  required 
                  className="form-input"
                />
                <input 
                  name="lastname" 
                  placeholder="Last Name" 
                  value={form.lastname} 
                  onChange={handleChange} 
                  className="form-input"
                />
              </div>
              
              <div className="form-row">
                <input 
                  name="email" 
                  placeholder="Email Address" 
                  type="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  required 
                  className="form-input"
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
