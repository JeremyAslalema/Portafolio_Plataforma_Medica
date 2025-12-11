import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: 'fa-envelope',
      title: 'Email',
      info: 'contacto@plataformamedica.edu.ec',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'fa-university',
      title: 'Institución',
      info: 'UPEC - Tulcán, Ecuador',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Programa',
      info: 'Computación Nivel 7',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'fa-calendar-alt',
      title: 'Período',
      info: 'Septiembre 2025 - Enero 2026',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            <span className="gradient-text">Contacto</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre el proyecto? ¿Interesado en colaborar?
            No dudes en contactarnos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-dark-text mb-8">Información del Proyecto</h2>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <i className={`fas ${item.icon} text-white`}></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-text">{item.title}</h3>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Info */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-dark-text mb-4">Integrantes</h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Jeremy Valdivieso</span>
                    <span className="text-sm text-gray-600">Desarrollador</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Cristian Valenzuela</span>
                    <span className="text-sm text-gray-600">Desarrollador</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Aida Solís</span>
                    <span className="text-sm text-gray-600">Analista de Calidad</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-dark-text mb-4">Conéctate</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-colors">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-dark-text mb-6">Envíanos un mensaje</h2>
              
              {submitMessage && (
                <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700">
                  <i className="fas fa-check-circle mr-2"></i>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-2">
                      Nombre Completo *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-user text-gray-400"></i>
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-envelope text-gray-400"></i>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-dark-text mb-2">
                    Asunto *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-tag text-gray-400"></i>
                    </div>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="consulta">Consulta sobre el proyecto</option>
                      <option value="colaboracion">Posibilidad de colaboración</option>
                      <option value="tecnico">Consulta técnica</option>
                      <option value="otros">Otro</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <i className="fas fa-chevron-down text-gray-400"></i>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-dark-text mb-2">
                    Mensaje *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <i className="fas fa-edit text-gray-400"></i>
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                      placeholder="Describe tu consulta o comentario..."
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="w-4 h-4 rounded border-gray-300 text-primary-blue focus:ring-primary-blue"
                    />
                    <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                      Suscribirme al boletín del proyecto
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 rounded-lg font-semibold flex items-center gap-2 ${
                      isSubmitting 
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary-blue to-secondary-blue hover:opacity-90'
                    } text-white transition-all`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-dark-text mb-6">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                {[
                  {
                    q: '¿Es este un proyecto real o académico?',
                    a: 'Es un proyecto académico desarrollado como parte del módulo de Computación Nivel 7, pero aplica metodologías y estándares de la industria real.'
                  },
                  {
                    q: '¿Puedo usar este código para mis proyectos?',
                    a: 'Sí, el código y documentación están disponibles como referencia académica.'
                  },
                  {
                    q: '¿Qué tecnologías se utilizaron?',
                    a: 'React, Tailwind CSS, metodologías ágiles (Scrum/Kanban), y herramientas como Trello y Project Libre.'
                  },
                  {
                    q: '¿Hay plan de continuar el desarrollo?',
                    a: 'Actualmente es un proyecto académico completo, pero podría evolucionar en el futuro.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <details className="group">
                      <summary className="list-none p-4 cursor-pointer flex items-center justify-between">
                        <span className="font-medium text-dark-text">{faq.q}</span>
                        <i className="fas fa-chevron-down text-gray-400 group-open:rotate-180 transition-transform"></i>
                      </summary>
                      <div className="px-4 pb-4 text-gray-600">
                        {faq.a}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;