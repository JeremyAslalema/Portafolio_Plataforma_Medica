import React, { useState } from 'react';

const FileViewer = ({ file, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  if (!file) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col">
        {/* Header */}
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
                {file.isEmbeddable && (
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    <i className="fas fa-eye mr-1"></i>
                    Vista previa en página
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 overflow-hidden">
          {file.isEmbeddable ? (
            // PARA GOOGLE DRIVE: IFRAME
            <div className="relative h-full">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-primary-blue rounded-full animate-spin"></div>
                    <p className="text-gray-600">Cargando documento en la página...</p>
                  </div>
                </div>
              )}
              
              <iframe
                src={file.filename}
                className="w-full h-full border-0"
                title={`PDF - ${file.title}`}
                onLoad={() => setIsLoading(false)}
                allow="autoplay"
              />
            </div>
          ) : (
            // PARA ONEDRIVE: BOTONES
            <div className="h-full flex flex-col items-center justify-center p-8">
              <div className="text-center max-w-md">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-6">
                  <i className={`fas ${file.icon} text-primary-blue text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{file.title}</h3>
                <p className="text-gray-600 mb-8">
                  Este documento está en OneDrive. Para una mejor experiencia, descárgalo o ábrelo directamente.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={file.filename}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-primary-blue to-secondary-blue text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Abrir en OneDrive
                  </a>
                  
                  <a
                    href={file.filename}
                    download={`${file.title.replace(/:/g, '')}.pdf`}
                    className="px-6 py-3 bg-white border-2 border-primary-blue text-primary-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-download"></i>
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-sm">
            <div className="text-gray-600">
              {file.isEmbeddable ? (
                <span className="flex items-center gap-2">
                  <i className="fab fa-google text-green-600"></i>
                  Documento incrustado desde Google Drive
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <i className="fab fa-microsoft text-blue-600"></i>
                  Documento almacenado en OneDrive
                </span>
              )}
            </div>
            
            <div className="flex gap-3">
              {file.isEmbeddable && file.downloadUrl && (
                <a
                  href={file.downloadUrl}
                  download={`${file.title.replace(/:/g, '')}.pdf`}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium flex items-center gap-2"
                >
                  <i className="fas fa-download"></i>
                  Descargar desde OneDrive
                </a>
              )}
              
              <button
                onClick={onClose}
                className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileViewer;