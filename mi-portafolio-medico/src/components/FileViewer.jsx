import React, { useState } from 'react';

const FileViewer = ({ file, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!file) return null;

  // IMPORTANTE: Construir la ruta correcta
  const getPdfUrl = () => {
    // 1. Usar file.filename que ya tiene la ruta completa "/files/nombre.pdf"
    // 2. Usar encodeURI para espacios y caracteres especiales
    return encodeURI(file.filename);
  };

  const pdfUrl = getPdfUrl();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col">
        {/* Viewer Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-blue to-secondary-blue flex items-center justify-center">
              <i className={`fas ${file.icon} text-white`}></i>
            </div>
            <div>
              <h2 className="text-xl font-bold text-dark-text">{file.title}</h2>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span>{file.category}</span>
                <span>•</span>
                <span>{file.date}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href={pdfUrl}  // CORREGIDO: Usar pdfUrl en lugar de construir mal la ruta
              download
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors font-medium flex items-center gap-2"
            >
              <i className="fas fa-download"></i>
              Descargar
            </a>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-primary-blue rounded-full animate-spin"></div>
                <p className="text-gray-600">Cargando documento...</p>
              </div>
            </div>
          )}
          
          <iframe
            src={pdfUrl}  // CORREGIDO: Usar pdfUrl construida correctamente
            className="w-full h-full"
            title={`PDF Viewer - ${file.title}`}
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Viewer Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <span>Tamaño: ~{(Math.random() * 2 + 1).toFixed(1)} MB</span>
              <span>•</span>
              <span>Páginas: {Math.floor(Math.random() * 20) + 5}</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 hover:text-primary-blue transition-colors">
                <i className="fas fa-print"></i>
                Imprimir
              </button>
              <span>•</span>
              <button className="flex items-center gap-2 hover:text-primary-blue transition-colors">
                <i className="fas fa-share-alt"></i>
                Compartir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileViewer;