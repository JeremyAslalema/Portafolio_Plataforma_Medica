import React from 'react';

const FileViewer = ({ file, onClose }) => {
  if (!file) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl flex flex-col overflow-hidden shadow-2xl">
        
        {/* Header Compacto */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-blue to-secondary-blue flex items-center justify-center flex-shrink-0">
              <i className={`fas ${file.icon} text-white text-sm`}></i>
            </div>
            <div className="min-w-0">
              <h2 className="font-bold text-gray-800 truncate">{file.title}</h2>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{file.category}</span>
                <span>•</span>
                <span>{file.date}</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center flex-shrink-0"
          >
            <i className="fas fa-times text-gray-600"></i>
          </button>
        </div>

        {/* Contenido Principal Compacto */}
        <div className="p-6">
          {/* Estado y descripción breve */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4">
              <i className={`fas ${file.icon} text-primary-blue text-2xl`}></i>
            </div>
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                <i className="fab fa-microsoft"></i>
                <span>OneDrive Universitario</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Accede o descarga el documento directamente.</p>
          </div>

          {/* Botones Compactos en Columna */}
          <div className="space-y-3">
            <a
              href={file.filename}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-4 bg-gradient-to-r from-primary-blue to-secondary-blue text-white rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
            >
              <i className="fas fa-external-link-alt"></i>
              <span>Abrir en OneDrive</span>
            </a>

            <a
              href={file.filename}
              download={`${file.title.replace(/:/g, ' - ')}.pdf`}
              className="w-full p-4 bg-white border-2 border-primary-blue text-primary-blue rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-3"
            >
              <i className="fas fa-download"></i>
              <span>Descargar PDF</span>
            </a>
          </div>

          {/* Instrucciones Mínimas */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-start gap-2 text-xs text-gray-500">
              <i className="fas fa-info-circle text-blue-500 mt-0.5 flex-shrink-0"></i>
              <p>
                <span className="font-medium text-gray-600">Nota:</span> Usa tu cuenta universitaria si OneDrive lo solicita. El enlace se abrirá en una nueva pestaña.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Mínimo */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-center">
            <button 
              onClick={onClose}
              className="px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileViewer;