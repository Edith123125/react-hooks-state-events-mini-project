import React from 'react';

function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
  return (
    <div>
      {categories.map(category => (
        <button
          key={category}
          className={category === selectedCategory ? 'selected' : ''}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
