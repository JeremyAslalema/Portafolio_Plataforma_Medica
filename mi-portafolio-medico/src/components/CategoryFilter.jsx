import React from 'react';
import { categories } from '../data/filesData';

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            activeCategory === category
              ? 'bg-gradient-to-r from-primary-blue to-secondary-blue text-white shadow-md'
              : 'bg-white text-dark-text border border-gray-200 hover:border-primary-blue hover:text-primary-blue'
          }`}
        >
          {category}
          {activeCategory === category && (
            <i className="fas fa-check ml-2"></i>
          )}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;