import React from 'react';
import { filesData } from '../data/filesData';

const FileCard = ({ file, onView }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Card Header */}
      <div className="p-6 border-b border-gray-50">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-blue to-secondary-blue flex items-center justify-center">
              <i className={`fas ${file.icon} text-white text-lg`}></i>
            </div>
            <div>
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-50 text-primary-blue">
                {file.category}
              </span>
            </div>
          </div>
          <span className="text-xs text-gray-500">{file.date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-dark-text mb-2 line-clamp-2">{file.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{file.description}</p>
      </div>

      {/* Tags */}
      <div className="px-6 py-3 border-b border-gray-50">
        <div className="flex flex-wrap gap-2">
          {file.tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-6">
        <div className="flex gap-3">
          <button
            onClick={() => onView(file)}
            className="flex-1 bg-gradient-to-r from-primary-blue to-secondary-blue text-white py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <i className="fas fa-eye"></i>
            Ver Documento
          </button>
          <a
            href={`/files/${file.filename}`}
            download
            className="w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            title="Descargar PDF"
          >
            <i className="fas fa-download text-gray-600"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FileCard;