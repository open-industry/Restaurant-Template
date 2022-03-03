import React from 'react';
import MenuItem from '../components/MenuItem';
import imgSelector from '../img/imgSelector';

const menuData = require('../data/db.json');

export default function Menu() {
  return (
    <div className="tile is-ancestor is-justify-content-center">
      <div className="tile is-parent is-flex is-8 is-vertical is-align-items-center">
        {menuData.items.map((item) => (
          item.isAvailable ? (
            <MenuItem
              image={imgSelector(item.name.toLowerCase())}
              name={item.name}
              price={`₳${item.price.toFixed(2)}`}
              alt={item.alt}
              key={item.id}
            />
          ) : null
        ))}
      </div>
    </div>
  );
}
