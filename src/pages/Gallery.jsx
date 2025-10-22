import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '🛒',
      description: 'Modern e-commerce solution with advanced features',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Fitness Mobile App',
      category: 'mobile',
      image: '💪',
      description: 'Cross-platform fitness tracking application',
      tags: ['React Native', 'Firebase']
    },
    {
      id: 3,
      title: 'Banking Dashboard',
      category: 'design',
      image: '📊',
      description: 'Financial dashboard with data visualization',
      tags: ['Figma', 'UI Design', 'UX Research']
    },
    {
      id: 4,
      title: 'Travel Booking Site',
      category: 'web',
      image: '✈️',
      description: 'Complete travel booking platform',
      tags: ['Vue.js', 'Express', 'PostgreSQL']
    },
    {
      id: 5,
      title: 'Food Delivery App',
      category: 'mobile',
      image: '🍕',
      description: 'Food ordering and delivery application',
      tags: ['Flutter', 'Node.js', 'MongoDB']
    },
    {
      id: 6,
      title: 'Healthcare Portal',
      category: 'design',
      image: '🏥',
      description: 'Patient management system interface',
      tags: ['Adobe XD', 'Prototyping', 'User Testing']
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <div className="gallery-hero-content">
            <h1>Our Work</h1>
            <p>Explore our portfolio of successful projects and creative solutions</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          {/* Category Filters */}
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="project-emoji">{project.image}</div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <h3>No projects found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;