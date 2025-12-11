import React, { useState } from 'react';

const FileViewer = ({ file, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState(file.isEmbeddable ? 'iframe' : 'buttons');
  
  if (!file) return null;

  // Determinar qué URL usar para cada acción
  const getViewUrl = () => {
    // Si el archivo es incrustable (Google Drive), usa filename
    if (file.isEmbeddable) return file.filename;
    // Si no es incrustable (OneDrive), usa la URL para abrir
    return file.filename;
  };

  const getDownloadUrl = () => {
    // Si tiene downloadUrl específica, úsala
    if (file.downloadUrl) return file.downloadUrl;
    // Si no, usa la misma URL para descargar
    return file.filename;
  };

  const viewUrl = getViewUrl();
  const downloadUrl = getDownloadUrl();

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
                {file.isEmbeddable && (
                  <>
                    <span>•</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      <i className="fas fa-check-circle mr-1"></i>
                      Visualizable en página
                    </span>
                  </>
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

        {/* Modos de visualización - Solo mostrar tabs si es incrustable */}
        {file.isEmbeddable && (
          <div className="flex border-b border-gray-200 bg-gray-50">
            <button
              onClick={() => setViewMode('iframe')}
              className={`flex-1 py-3 font-medium text-center ${viewMode === 'iframe' ? 'text-primary-blue border-b-2 border-primary-blue bg-white' : 'text-gray-500'}`}
            >
              <i className="fas fa-eye mr-2"></i>
              Ver en página
            </button>
            <button
              onClick={() => setViewMode('buttons')}
              className={`flex-1 py-3 font-medium text-center ${viewMode === 'buttons' ? 'text-primary-blue border-b-2 border-primary-blue bg-white' : 'text-gray-500'}`}
            >
              <i className="fas fa-download mr-2"></i>
              Opciones de descarga
            </button>
          </div>
        )}

        {/* Contenido principal */}
        <div className="flex-1 overflow-hidden">
          {viewMode === 'iframe' && file.isEmbeddable ? (
            // MODO IFRAME: Para Google Drive
            <div className="relative h-full">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-primary-blue rounded-full animate-spin"></div>
                    <p className="text-gray-600">Cargando documento...</p>
                  </div>
                </div>
              )}
              
              <iframe
                src={viewUrl}
                className="w-full h-full border-0"
                title={`PDF Viewer - ${file.title}`}
                onLoad={() => setIsLoading(false)}
                allow="autoplay"
              />
            </div>
          ) : (
            // MODO BOTONES: Para OneDrive o modo descarga
            <div className="h-full flex flex-col">
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-6">
                    <i className={`fas ${file.icon} text-primary-blue text-3xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{file.title}</h3>
                  <p className="text-gray-600">Selecciona cómo quieres acceder al documento:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {/* Botón para VER/Abrir */}
                  <a
                    href={viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center hover:bg-blue-50"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <i className="fas fa-external-link-alt text-primary-blue text-xl"></i>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">
                      {file.isEmbeddable ? 'Abrir en Google Drive' : 'Ver en OneDrive'}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {file.isEmbeddable 
                        ? 'Abre el documento en Google Drive' 
                        : 'Abre el documento en una nueva pestaña'}
                    </p>
                    <span className="text-xs text-blue-600 font-medium">
                      Recomendado para visualizar
                    </span>
                  </a>

                  {/* Botón para DESCARGAR */}
                  <a
                    href={downloadUrl}
                    download={`${file.title.replace(/:/g, '')}.pdf`}
                    className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center hover:bg-green-50"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <i className="fas fa-download text-green-600 text-xl"></i>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Descargar PDF</h4>
                    <p className="text-sm text-gray-600 mb-3">Guarda el documento en tu dispositivo</p>
                    <span className="text-xs text-green-600 font-medium">Para uso sin conexión</span>
                  </a>
                </div>

                {/* Información adicional específica por tipo */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-700 mb-3">Notas importantes:</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {file.isEmbeddable ? (
                      <>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-info-circle text-blue-500 mt-0.5"></i>
                          <span>Este documento se visualiza directamente en la página</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-shield-alt text-green-500 mt-0.5"></i>
                          <span>Documento alojado en Google Drive con acceso público</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="fab fa-google text-red-500 mt-0.5"></i>
                          <span>No se requiere iniciar sesión para visualizar</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-info-circle text-blue-500 mt-0.5"></i>
                          <span>OneDrive puede pedir iniciar sesión para ver el documento</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-shield-alt text-green-500 mt-0.5"></i>
                          <span>Los documentos están almacenados de forma segura en OneDrive de la universidad</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-sync text-purple-500 mt-0.5"></i>
                          <span>Las actualizaciones en OneDrive se reflejarán automáticamente aquí</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Viewer Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-4">
              {file.isEmbeddable && viewMode === 'iframe' && (
                <a
                  href={viewUrl.replace('/preview', '/view')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                >
                  <i className="fab fa-google"></i>
                  Abrir en Google Drive
                </a>
              )}
              {!file.isEmbeddable && (
                <a
                  href="https://onedrive.live.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                >
                  <i className="fab fa-microsoft"></i>
                  Ir a OneDrive
                </a>
              )}
            </div>
            <div className="flex gap-3">
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