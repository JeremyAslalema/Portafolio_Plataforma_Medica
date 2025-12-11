import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { value: '8', label: 'Documentos', icon: 'fa-file-pdf' },
    { value: '4', label: 'Categorías', icon: 'fa-folder' },
    { value: '3', label: 'Integrantes', icon: 'fa-users' },
    { value: '5', label: 'Metodologías', icon: 'fa-cogs' }
  ];

  const features = [
    {
      icon: 'fa-project-diagram',
      title: 'Gestión Ágil',
      description: 'Uso de metodologías Scrum y Kanban para el desarrollo incremental de la plataforma médica.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Calidad y Seguridad',
      description: 'Implementación de estándares CMMI, ISO 9001, y normativas HIPAA/LOPDGDD.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'fa-chart-line',
      title: 'Métricas y KPIs',
      description: 'Seguimiento de indicadores de rendimiento, calidad y satisfacción del usuario.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'fa-tools',
      title: 'Herramientas Profesionales',
      description: 'Utilización de Trello, Project Libre, y herramientas de desarrollo modernas.',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <div className="hero-badge inline-flex items-center gap-2 mb-6">
            <i className="fas fa-graduation-cap"></i>
            <span>Proyecto Académico - Computación Nivel 7</span>
          </div>
          
          <h1 className="hero-title mb-6">
            Plataforma Integral de 
            <span className="gradient-text block">Gestión Médica</span>
          </h1>
          
          <p className="hero-subtitle mb-8">
            Portafolio documental del desarrollo de una plataforma médica en línea, 
            aplicando metodologías ágiles, estándares de calidad y mejores prácticas 
            en gestión de proyectos de software.
          </p>
          
          <div className="cta-buttons">
            <Link to="/portfolio" className="btn btn-primary">
              <i className="fas fa-eye"></i>
              Ver Portafolio
            </Link>
            <a href="#features" className="btn btn-secondary">
              <i className="fas fa-info-circle"></i>
              Más Información
            </a>
          </div>
          
          <div className="stats-grid mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.color || 'from-primary-blue to-secondary-blue'} flex items-center justify-center mb-4`}>
                  <i className={`fas ${stat.icon} text-white text-xl`}></i>
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-header mb-12">
            <h2 className="section-title">Metodologías y Herramientas</h2>
            <p className="section-subtitle">
              Enfoque integral para el desarrollo de software médico de calidad
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className={`feature-icon bg-gradient-to-br ${feature.color}`}>
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-stats">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Implementado en proyecto</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="cta-title mb-6">¿Listo para explorar el portafolio?</h2>
          <p className="cta-subtitle mb-8">
            Accede a toda la documentación del proyecto, desde la planificación inicial 
            hasta la implementación de estándares de calidad.
          </p>
          <Link to="/portfolio" className="cta-button">
            <i className="fas fa-folder-open"></i>
            Explorar Documentos
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;