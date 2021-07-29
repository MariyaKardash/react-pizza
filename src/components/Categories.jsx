import React, { useState } from 'react';

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>
          Все
        </li>
        {items &&
          items.map((elem, index) => (
            <li
              onClick={() => setActiveItem(index)}
              key={`${elem}_${index}`}
              className={activeItem === index ? 'active' : ''}>
              {elem}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
