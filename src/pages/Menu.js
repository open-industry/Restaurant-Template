import React, { useState } from 'react';
import AddToCart from '../components/AddToCart';
import MenuItem from '../components/MenuItem';
import imgSelector from '../img/imgSelector';

/*
  - fix click handlers for triggering modal
  - add click handlers to images and and to modal background
*/

const menuData = require('../data/db.json');

export default function Menu() {
  const [isAddCart, setIsAddCart] = useState(() => false);

  const handleOnClick = () => {
    setIsAddCart((prevState) => !prevState);
  };

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
                onClick={handleOnClick}
              />
            ) : null
          ))}
        </div>
      </div>
      <div className={`modal ${isAddCart ? 'is-active' : ''}`}>
        <div className="modal-background" />
        <div className="modal-content is-flex is-justify-content-center">
          <MenuItem image={imgSelector('funny burger')} name="Funny Burger" price="₳1.00" alt="Funny Burger" />
          <AddToCart />
        </div>
        <button className="modal-close is-large" type="button" onClick={handleOnClick} />
      </div>
    </>
  );
}
