import React from "react";

export default function Services() {
  // Services data array containing all service offerings
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Designing and building professional websites and web apps with clean architecture, responsive layouts, and strong user experience.",
      image: "https://via.placeholder.com/300x200/74ebd5/ffffff?text=Web+Development",
      features: ["Responsive Design", "SEO-Friendly Structure", "Performance Optimization", "User-Centered UX"]
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Creating interactive, modern interfaces using React and JavaScript to deliver intuitive digital experiences.",
      image: "https://via.placeholder.com/300x200/9face6/ffffff?text=Frontend+Dev",
      features: ["React Applications", "Component Architecture", "State Management", "Accessible Interfaces"]
    },
    {
      id: 3,
      title: "Full-Stack Solutions",
      description: "Building complete applications from frontend workflows to server-side logic, APIs, and database integration.",
      image: "https://via.placeholder.com/300x200/2b2d42/ffffff?text=Full-Stack",
      features: ["Node.js", "Express", "MongoDB", "REST API Integration"]
    },
    {
      id: 4,
      title: "UI/UX & Prototyping",
      description: "Turning ideas into polished interfaces through design thinking, wireframes, and usability-focused development.",
      image: "https://via.placeholder.com/300x200/ff6b6b/ffffff?text=UI%2FUX",
      features: ["Wireframing", "Design Consistency", "Usability Testing", "Interface Refinement"]
    }
  ];

  return (
    <div className="services-container">
      <div className="services-content">
        <h1 className="page-title">Services I Offer</h1>
        <p className="services-intro">
          I provide comprehensive software development services to help bring your ideas to life.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul className="features-list">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="services-cta">
          <h3>Ready to Start Your Project?</h3>
          <p>Let's discuss how I can help bring your vision to life.</p>
          <button className="cta-button" onClick={() => window.location.href = '/contact'}>
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
