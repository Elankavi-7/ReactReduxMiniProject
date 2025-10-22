import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'web',
      title: 'Web Development',
      icon: '💻',
      description: 'Modern, responsive websites and web applications',
      fullDescription: 'We build fast, scalable, and secure web applications using the latest technologies like React, Node.js, and modern CSS frameworks.',
      features: ['Responsive Design', 'SEO Optimization', 'Fast Performance', 'Cross-browser Compatibility'],
      price: 'Starting at $2,500'
    },
    {
      id: 'mobile',
      title: 'Mobile Apps',
      icon: '📱',
      description: 'Native and cross-platform mobile applications',
      fullDescription: 'From concept to deployment, we create engaging mobile experiences for iOS and Android that users love.',
      features: ['iOS & Android', 'Native Performance', 'App Store Deployment', 'Offline Support'],
      price: 'Starting at $5,000'
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Beautiful and intuitive user interfaces',
      fullDescription: 'We design interfaces that are not just beautiful but also intuitive and user-friendly, enhancing user engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $1,500'
    },
  
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive digital solutions to grow your business</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-card ${activeService === service.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="service-card-inner">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>

                  <div className="service-price">{service.price}</div>
                  
                  <div className="service-actions">
                    <Link to={`/services/${service.id}`} className="btn btn-primary">
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* Expanded Details */}
                {activeService === service.id && (
                  <div className="service-details">
                    <p>{service.fullDescription}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>How we deliver exceptional results</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>We understand your requirements and goals</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>We create a detailed project roadmap</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p>We build your solution with best practices</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Delivery</h3>
              <p>We deploy and support your project</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;