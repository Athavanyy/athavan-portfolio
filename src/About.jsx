import React from "react";

export default function About() {
  // Handle resume download functionality
  const handleResumeDownload = () => {
    // Create a link element to download the resume PDF
    // Use absolute URL to ensure it works in both dev and production
    const resumeUrl = window.location.origin + '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Athavan_Yokanathan_Resume.pdf'; // Suggested filename for download
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="page-title">About Me</h1>
        
        <div className="about-main">
          {/* Profile Image Section */}
          <div className="profile-image-section">
            <img
              src="/profile-image.jpg"
              alt="Athavan Yokanathan Profile"
              className="profile-image"
            />
          </div>

          {/* About Text Section */}
          <div className="about-text-section">
            <h2 className="legal-name">Athavan Yokanathan</h2>
            
            <div className="about-description">
              <p>
                I am a Software Engineering student with a strong interest in building modern,
                user-focused web applications. My work is driven by a passion for turning ideas
                into clean, responsive, and functional digital experiences that solve real-world
                problems.
              </p>
              
              <p>
                Through my studies and personal projects, I have developed practical experience in
                React, JavaScript, HTML, CSS, Node.js, and database-driven application development.
                I enjoy working through complex logic, building intuitive interfaces, and creating
                solutions that are both efficient and easy to use.
              </p>
              
              <p>
                I am especially interested in frontend development, full-stack web applications,
                software design, and continuous learning. I am eager to contribute to impactful
                projects, collaborate with teams, and keep growing as a developer in the tech
                industry.
              </p>
            </div>

            {/* Resume Download Section */}
            <div className="resume-section">
              <button className="resume-button" onClick={handleResumeDownload}>
                Download My Resume (PDF)
              </button>
            </div>

            <div className="highlights-section">
              <h3>Professional Highlights</h3>
              <ul className="highlights-list">
                <li>Frontend and full-stack web development experience</li>
                <li>Responsive design and accessibility-focused UI development</li>
                <li>Strong problem-solving, teamwork, and project ownership</li>
                <li>Passion for creating clean, maintainable software solutions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-item">React</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">HTML5</div>
            <div className="skill-item">CSS3</div>
            <div className="skill-item">Node.js</div>
            <div className="skill-item">Express</div>
            <div className="skill-item">MongoDB</div>
            <div className="skill-item">Git & GitHub</div>
            <div className="skill-item">Responsive Design</div>
            <div className="skill-item">UI/UX Thinking</div>
          </div>
        </div>
      </div>
    </div>
  );
}
