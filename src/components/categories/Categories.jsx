import React from 'react';
import './categories.css';

const Categories = ({ onCategoryClick }) => {
  const categories = ["home", "opinion", "world", "national", "politics", "business", "technology", "science", "health", "sports", "arts", "books", "style", "food", "travel"];

  return (
    <div className='category'>
      <ul className='categoryList capitalize'>
        {categories.map(category => (
          <li key={category} onClick={() => onCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
