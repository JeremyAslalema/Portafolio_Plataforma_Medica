import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-text text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-blue to-secondary-blue flex items-center justify-center">
                <i className="fas fa-heartbeat text-white"></i>
              </div>
              <span className="text-xl font-bold">Portafolio Médico</span>
            </Link>
            <p className="text-gray-300 text-sm mb-6">
              Proyecto académico sobre gestión de plataforma médica integral usando metodologías ágiles y estándares de calidad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-blue transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-blue transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-blue transition-colors">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portafolio</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Acerca del Proyecto</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4">Categorías</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Gestión de Proyectos</span></li>
              <li><span className="text-gray-300">Calidad de Software</span></li>
              <li><span className="text-gray-300">Métricas</span></li>
              <li><span className="text-gray-300">Normativas</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Información</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <i className="fas fa-user-graduate"></i>
                <span>Computación - Nivel 7</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <i className="fas fa-university"></i>
                <span>UPEC Tulcán</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <i className="fas fa-calendar-alt"></i>
                <span>2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Portafolio de Gestión Médica. Proyecto académico.</p>
          <p className="mt-2">Jeremy Valdivieso - Cristian Valenzuela - Aida Solís</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;