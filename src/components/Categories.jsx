import React from 'react';

function Categories({ items }) {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((elem, index) => (
          <li key={`${elem}_${index}`}>{elem}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
