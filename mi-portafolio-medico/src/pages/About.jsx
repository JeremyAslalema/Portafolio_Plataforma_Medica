import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Jeremy Valdivieso',
      role: 'Desarrollador Frontend',
      description: 'Responsable de interfaz de usuario y experiencia del paciente.',
      skills: ['React', 'UI/UX', 'Trello'],
      avatar: 'JV'
    },
    {
      name: 'Cristian Valenzuela',
      role: 'Desarrollador Backend',
      description: 'Encargado de arquitectura, seguridad y APIs.',
      skills: ['Node.js', 'Security', 'CMMI'],
      avatar: 'CV'
    },
    {
      name: 'Aida Solís',
      role: 'Analista de Calidad',
      description: 'Gestión de métricas, pruebas y estándares de calidad.',
      skills: ['QA', 'ISO', 'Métricas'],
      avatar: 'AS'
    }
  ];

  const methodologies = [
    {
      name: 'Scrum',
      description: 'Metodología ágil para desarrollo incremental en sprints.',
      icon: 'fa-sync-alt'
    },
    {
      name: 'CMMI',
      description: 'Modelo de madurez para mejorar procesos de desarrollo.',
      icon: 'fa-chart-line'
    },
    {
      name: 'ISO 9001/12207',
      description: 'Estándares internacionales para gestión de calidad y ciclo de vida.',
      icon: 'fa-certificate'
    },
    {
      name: 'Kanban',
      description: 'Gestión visual del flujo de trabajo con Trello.',
      icon: 'fa-columns'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            Acerca del <span className="gradient-text">Proyecto</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Plataforma Integral de Gestión Médica en Línea - Proyecto académico desarrollado 
            como parte del módulo de Computación Nivel 7.
          </p>
        </div>

        {/* Project Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-dark-text mb-6">Resumen del Proyecto</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-dark-text mb-4">Objetivo Principal</h3>
              <p className="text-gray-700 mb-6">
                Desarrollar una plataforma digital integral que centralice y optimice la gestión 
                de servicios médicos, facilitando el registro seguro de pacientes, agendamiento 
                de citas, historial clínico digital y comunicación eficiente entre pacientes y doctores.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-primary-blue">
                <p className="text-gray-700 italic">
                  "Transformar los desafíos en el ámbito digital de la salud en oportunidades 
                  de calidad y confianza elevadas."
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark-text mb-4">Alcance</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Módulo de autenticación y usuarios</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Sistema de citas médicas</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Historial clínico electrónico</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Telemedicina y prescripción electrónica</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Cumplimiento normativo (HIPAA, LOPDGDD)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark-text mb-8 text-center">Equipo de Desarrollo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-blue to-secondary-blue flex items-center justify-center text-white font-bold text-xl">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-text">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodologies Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark-text mb-8 text-center">Metodologías Aplicadas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-blue to-secondary-blue flex items-center justify-center">
                  <i className={`fas ${method.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-dark-text mb-2">{method.name}</h3>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-dark-text mb-8 text-center">Cronología del Proyecto</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-blue to-secondary-blue"></div>
            
            {/* Timeline Items */}
            {[
              { date: 'Sep 2025', title: 'Inicio del Proyecto', desc: 'Planificación inicial y definición de alcance' },
              { date: 'Oct 2025', title: 'Sprint 0', desc: 'Configuración de entorno y arquitectura base' },
              { date: 'Nov 2025', title: 'Desarrollo Sprints 1-3', desc: 'Implementación de módulos principales' },
              { date: 'Dic 2025', title: 'Pruebas y Calidad', desc: 'Aplicación de estándares CMMI e ISO' },
              { date: 'Dic 2025', title: 'Lanzamiento', desc: 'Despliegue en producción y documentación final' }
            ].map((item, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'pr-1/2 text-right' : 'pl-1/2'}`}>
                <div className={`absolute top-0 w-6 h-6 rounded-full bg-primary-blue border-4 border-white ${index % 2 === 0 ? 'right-0 transform translate-x-1/2' : 'left-0 transform -translate-x-1/2'}`}></div>
                <div className={`bg-gray-50 rounded-lg p-4 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <div className="text-sm font-semibold text-primary-blue mb-1">{item.date}</div>
                  <h4 className="font-bold text-dark-text mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;