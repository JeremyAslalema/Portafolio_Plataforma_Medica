import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <i className="fas fa-search text-gray-400"></i>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar documentos por título, categoría o etiqueta..."
          className="w-full pl-12 pr-24 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-primary-blue to-secondary-blue text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Buscar
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Búsqueda rápida:</span>
          {['CMMI', 'ISO', 'Trello', 'Project Libre', 'Métricas'].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                setSearchTerm(tag);
                onSearch(tag);
              }}
              className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </form>
  );
};

export default SearchBar;