import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/contact");
  };

  const handleViewProjects = () => {
    navigate("/projects");
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Athavanyy",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.9.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.56-.29-5.26-1.28-5.26-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.71 5.38-5.29 5.66.42.36.8 1.07.8 2.16v3.2c0 .31.21.68.8.56A11.57 11.57 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      )
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/athavan-yokanathan-606213333/",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.94 8.5A1.56 1.56 0 1 1 6.9 5.4a1.56 1.56 0 0 1 .04 3.1ZM5.5 9.72h2.9V18H5.5V9.72Zm5.05 0h2.78v1.13h.04c.39-.73 1.34-1.5 2.76-1.5 2.95 0 3.49 1.94 3.49 4.47V18h-2.9v-16c0-1.18-.02-2.7-1.65-2.7-1.66 0-1.91 1.29-1.91 2.63V18h-2.9V9.72Z" />
        </svg>
      )
    },
    {
      label: "Email",
      href: "mailto:athavanyokanathan4@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.25 6.8 5.13 6.8-5.13H5.2Zm13.55 1.06-6.12 4.6a1 1 0 0 1-1.26 0L5.25 7.56v9.69c0 .41.34.75.75.75h12c.41 0 .75-.34.75-.75V7.56Z" />
        </svg>
      )
    }
  ];

  return (
    <div className="home-container">
      <div className="home-shell">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="hero-greeting">Hi, I&apos;m</p>
            <h1 className="hero-title">
              <span className="highlight">Athavan Yokanathan</span>
            </h1>
            <p className="hero-role">Front-End Developer</p>
            <p className="hero-description">
              I design and build clean, responsive digital experiences that balance strong user experience,
              polished visuals, and efficient code.
            </p>

            <div className="cta-section">
              <button className="cta-button" onClick={handleViewProjects}>
                View My Work
              </button>
              <button className="cta-button secondary" onClick={handleLearnMore}>
                Let&apos;s Talk
              </button>
            </div>

            <div className="social-row" aria-label="social links">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="social-link"
                  aria-label={item.label}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-blob">
              <img src="/profile-image.jpg" alt="Athavan Yokanathan" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
