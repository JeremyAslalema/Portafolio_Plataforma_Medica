import React from 'react';

const FileViewer = ({ file, onClose }) => {
  if (!file) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl flex flex-col">
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
          
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Contenido Principal - SIMPLE Y FUNCIONAL */}
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-6">
              <i className={`fas ${file.icon} text-primary-blue text-3xl`}></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{file.title}</h3>
            <p className="text-gray-600 mb-6">Documento disponible en OneDrive</p>
            
            {/* Estado del documento */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm mb-6">
              <i className="fab fa-microsoft"></i>
              <span>Almacenado en OneDrive de la universidad</span>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="space-y-4">
            {/* Botón para ABRIR en OneDrive */}
            <a
              href={file.filename}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full p-4 bg-gradient-to-r from-primary-blue to-secondary-blue text-white rounded-xl font-semibold hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-3"
            >
              <i className="fas fa-external-link-alt text-lg"></i>
              <span className="text-lg">Abrir documento en OneDrive</span>
            </a>

            {/* Botón para DESCARGAR */}
            <a
              href={file.filename}
              download={`${file.title}.pdf`}
              className="block w-full p-4 bg-white border-2 border-primary-blue text-primary-blue rounded-xl font-semibold hover:bg-blue-50 transition-colors text-center flex items-center justify-center gap-3"
            >
              <i className="fas fa-download text-lg"></i>
              <span className="text-lg">Descargar PDF</span>
            </a>
          </div>

          {/* Información adicional */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h4 className="font-semibold text-gray-700 mb-3">Instrucciones:</h4>
            <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-5">
              <li>Haz clic en <strong>"Abrir documento en OneDrive"</strong> para verlo en tu navegador</li>
              <li>Si OneDrive pide iniciar sesión, usa tu cuenta de la universidad</li>
              <li>Para guardar una copia, haz clic en <strong>"Descargar PDF"</strong></li>
              <li>El documento se abrirá en una nueva pestaña</li>
            </ol>
          </div>
        </div>

        {/* Viewer Footer - SIMPLE */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <div className="flex items-center justify-center">
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition-colors"
            >
              Cerrar ventana
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileViewer;