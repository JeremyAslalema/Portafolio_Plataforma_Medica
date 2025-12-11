import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio', icon: 'fa-home' },
    { path: '/portfolio', label: 'Portafolio', icon: 'fa-folder' },
    { path: '/about', label: 'Acerca de', icon: 'fa-user' },
    { path: '/contact', label: 'Contacto', icon: 'fa-envelope' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue to-secondary-blue flex items-center justify-center">
              <i className="fas fa-heartbeat text-white text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-dark-text">Portafolio Médico</span>
              <span className="text-sm text-gray-600">Gestión de Proyectos</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? 'bg-primary-blue text-white shadow-md'
                    : 'text-dark-gray hover:text-primary-blue hover:bg-gray-50'
                }`}
              >
                <i className={`fas ${item.icon}`}></i>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-dark-text`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg border border-gray-100">
            <div className="flex flex-col p-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    location.pathname === item.path
                      ? 'bg-primary-blue text-white'
                      : 'text-dark-text hover:bg-gray-50'
                  }`}
                >
                  <i className={`fas ${item.icon} w-5`}></i>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;