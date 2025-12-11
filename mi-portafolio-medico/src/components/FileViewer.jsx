import React, { useState } from 'react';

const FileViewer = ({ file, onClose }) => {
  if (!file) return null;

  // Los enlaces de OneDrive ya están completos, no necesitan encodeURI
  const pdfUrl = file.filename;

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

        {/* Contenido Principal - Opciones para ver/descargar */}
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-6">
              <i className={`fas ${file.icon} text-primary-blue text-3xl`}></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{file.title}</h3>
            <p className="text-gray-600">Selecciona cómo quieres acceder al documento:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Botón para VER en OneDrive */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <i className="fas fa-external-link-alt text-primary-blue text-xl"></i>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Ver en OneDrive</h4>
              <p className="text-sm text-gray-600 mb-3">Abre el documento en una nueva pestaña</p>
              <span className="text-xs text-blue-600 font-medium">Recomendado para visualizar</span>
            </a>

            {/* Botón para DESCARGAR */}
            <a
              href={pdfUrl}
              download={`${file.title}.pdf`}
              className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <i className="fas fa-download text-green-600 text-xl"></i>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Descargar PDF</h4>
              <p className="text-sm text-gray-600 mb-3">Guarda el documento en tu dispositivo</p>
              <span className="text-xs text-green-600 font-medium">Para uso sin conexión</span>
            </a>
          </div>

          {/* Información adicional */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h4 className="font-semibold text-gray-700 mb-3">Notas importantes:</h4>
            <ul className="text-sm text-gray-600 space-y-2">
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
            </ul>
          </div>
        </div>

        {/* Viewer Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <div className="flex items-center justify-center text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <button 
                onClick={onClose}
                className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors"
              >
                Cerrar
              </button>
              <a
                href="https://onedrive.live.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <i className="fab fa-microsoft"></i>
                Ir a OneDrive
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileViewer;

