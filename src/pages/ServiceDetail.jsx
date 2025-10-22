import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const services = {
    web: {
      title: 'Web Development',
      icon: '💻',
      description: 'Modern, responsive websites and web applications',
      fullDescription: 'We specialize in creating fast, scalable, and secure web applications using the latest technologies. Our web development services include everything from simple business websites to complex web applications.',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Fast Performance',
        'Cross-browser Compatibility',
        'Progressive Web Apps',
        'E-commerce Solutions'
      ],
      process: [
        'Requirement Analysis & Planning',
        'UI/UX Design & Prototyping',
        'Development & Implementation',
        'Testing & Quality Assurance',
        'Deployment & Launch',
        'Maintenance & Support'
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL'],
      price: 'Starting at $2,500',
      timeline: '2-8 weeks'
    },
    mobile: {
      title: 'Mobile Apps',
      icon: '📱',
      description: 'Native and cross-platform mobile applications',
      fullDescription: 'From concept to deployment, we create engaging mobile experiences for iOS and Android that users love. Our mobile apps are optimized for performance and user experience.',
      features: [
        'iOS & Android Development',
        'Native Performance',
        'App Store Deployment',
        'Offline Support',
        'Push Notifications',
        'API Integration'
      ],
      process: [
        'Concept & Strategy',
        'Wireframing & Design',
        'Native Development',
        'Testing & Debugging',
        'Store Deployment',
        'Updates & Maintenance'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      price: 'Starting at $5,000',
      timeline: '4-12 weeks'
    },
    design: {
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Beautiful and intuitive user interfaces',
      fullDescription: 'We design interfaces that are not just beautiful but also intuitive and user-friendly, enhancing user engagement and driving business growth.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Design Systems',
        'User Testing',
        'Design Handoff'
      ],
      process: [
        'User Research & Analysis',
        'Information Architecture',
        'Wireframing & Prototyping',
        'Visual Design',
        'User Testing',
        'Design System Creation'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      price: 'Starting at $1,500',
      timeline: '1-4 weeks'
    },
    consulting: {
      title: 'Consulting',
      icon: '🔍',
      description: 'Expert advice for your digital transformation',
      fullDescription: 'Get expert guidance on technology stack, architecture, and digital strategy to maximize your business potential and stay ahead of the competition.',
      features: [
        'Strategy Planning',
        'Technical Audit',
        'Best Practices',
        'Performance Optimization',
        'Architecture Review',
        'Team Training'
      ],
      process: [
        'Initial Assessment',
        'Strategy Development',
        'Implementation Plan',
        'Technical Guidance',
        'Progress Review',
        'Ongoing Support'
      ],
      technologies: ['Architecture Review', 'Code Audit', 'Performance Analysis', 'Security Assessment'],
      price: '$150/hour',
      timeline: 'Flexible'
    }
  };

  const service = services[serviceId] || services.web;

  return (
    <div className="service-detail">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-icon-large">{service.icon}</div>
            <h1>{service.title}</h1>
            <p className="service-description">{service.description}</p>
            <div className="service-meta">
              <div className="meta-item">
                <span className="meta-label">Starting Price</span>
                <span className="meta-value">{service.price}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Timeline</span>
                <span className="meta-value">{service.timeline}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="service-detail-content">
        <div className="container">
          <div className="service-layout">
            {/* Main Content */}
            <div className="service-main">
              <section className="service-section">
                <h2>Service Overview</h2>
                <p>{service.fullDescription}</p>
              </section>

              <section className="service-section">
                <h2>What We Offer</h2>
                <div className="features-grid">
                  {service.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </section>

              <section className="service-section">
                <h2>Our Process</h2>
                <div className="process-steps">
                  {service.process.map((step, index) => (
                    <div key={index} className="process-step">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">
                        <h4>{step}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="service-sidebar">
              <div className="sidebar-card">
                <h3>Technologies</h3>
                <div className="tech-tags">
                  {service.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Get Started</h3>
                <p>Ready to start your project? Get in touch with us for a free consultation.</p>
                <Link to="/contact" className="btn btn-primary btn-full">
                  Start Project
                </Link>
                <button className="btn btn-secondary btn-full">
                  Schedule Call
                </button>
              </div>

              <div className="sidebar-card">
                <h3>Have Questions?</h3>
                <p>We're here to help you understand how our services can benefit your business.</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <span>contact@myapp.com</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;