import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const team = [
    { name: 'John Doe', role: 'CEO & Founder', avatar: '👨‍💼', bio: 'Visionary leader with 10+ years in tech' },
    { name: 'Jane Smith', role: 'CTO', avatar: '👩‍💻', bio: 'Technical expert in modern web technologies' },
    { name: 'Mike Johnson', role: 'Lead Designer', avatar: '👨‍🎨', bio: 'Creative designer focused on user experience' },
    { name: 'Sarah Wilson', role: 'Project Manager', avatar: '👩‍💼', bio: 'Expert in agile project management' },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '3', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About MyApp</h1>
            <p className="about-subtitle">
              We are a passionate team of developers, designers, and innovators dedicated to creating 
              exceptional digital experiences that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with cutting-edge digital solutions that solve real problems 
                and create meaningful impact in today's competitive landscape.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🚀</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading digital innovation partner for businesses worldwide, known for 
                our excellence, reliability, and transformative solutions.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💎</div>
              <h3>Our Values</h3>
              <p>
                Quality, innovation, and customer satisfaction are at the core of everything we do. 
                We believe in building lasting relationships through exceptional work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The talented people behind our success</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.avatar}</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;