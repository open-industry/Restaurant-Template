import React from 'react';
import AddToCart from '../components/AddToCart';
import MenuItem from '../components/MenuItem';
import imgSelector from '../img/imgSelector';

const menuData = require('../data/db.json');

export default function Menu() {
  return (
    <>
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
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-content">
          <AddToCart />
        </div>
        <button className="modal-close is-large" type="button" />
      </div>
    </>
  );
}
