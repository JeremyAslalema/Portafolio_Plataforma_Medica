import React, { useState } from 'react';
import FileCard from '../components/FileCard';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import FileViewer from '../components/FileViewer';
import { filesData } from '../data/filesData';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const filteredFiles = filesData.filter((file) => {
    const matchesCategory = activeCategory === 'Todos' || file.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      file.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      file.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      file.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const handleViewFile = (file) => {
    setSelectedFile(file);
  };

  const handleCloseViewer = () => {
    setSelectedFile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            <span className="gradient-text">Portafolio Documental</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Documentación completa del proyecto "Plataforma Integral de Gestión Médica en Línea". 
            Incluye planificación, metodologías, métricas y estándares de calidad aplicados.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10">
          <SearchBar onSearch={setSearchTerm} />
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <CategoryFilter 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-600">
            <span className="font-semibold text-primary-blue">{filteredFiles.length}</span> 
            de <span className="font-semibold">{filesData.length}</span> documentos encontrados
          </div>
          <div className="flex items-center gap-3">
            <select className="px-3 py-2 rounded-lg border border-gray-200 bg-white">
              <option>Ordenar por: Fecha</option>
              <option>Ordenar por: Nombre</option>
              <option>Ordenar por: Categoría</option>
            </select>
            <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
              <i className="fas fa-filter"></i>
              Filtros
            </button>
          </div>
        </div>

        {/* Files Grid */}
        {filteredFiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFiles.map((file) => (
              <FileCard 
                key={file.id} 
                file={file} 
                onView={handleViewFile}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <i className="fas fa-search text-gray-400 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">No se encontraron documentos</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              No hay documentos que coincidan con "{searchTerm}" en la categoría "{activeCategory}".
              Intenta con otros términos o selecciona otra categoría.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('Todos');
              }}
              className="px-6 py-3 bg-gradient-to-r from-primary-blue to-secondary-blue text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <i className="fas fa-redo-alt mr-2"></i>
              Restablecer búsqueda
            </button>
          </div>
        )}

        {/* PDF Viewer Modal */}
        {selectedFile && (
          <FileViewer 
            file={selectedFile} 
            onClose={handleCloseViewer} 
          />
        )}
      </div>
    </div>
  );
};

export default Portfolio;