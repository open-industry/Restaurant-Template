/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import AddToCart from '../components/cart/AddToCart';
import MenuItem from '../components/MenuItem';
import imgSelector from '../img/imgSelector';
import focusTrap from '../components/focusTrap';

const { items: menuItems } = require('../data/db.json');

export default function Menu({ closeSidebar }) {
  const [isAddCart, setIsAddCart] = useState(() => false);
  const [itemFocus, setItemFocus] = useState(() => null);
  const [isModal, setIsModal] = useState(() => false);

  const modalRef = useRef();

  const closeModal = () => {
    setIsAddCart(() => false);
    setItemFocus(() => null);
  };

  const handleKeydown = (e) => {
    if (e.key === 'Escape') closeModal();

    else if (e.key === 'Tab') focusTrap(e, modalRef.current);
  };

  useEffect(() => {
    if (isAddCart) {
      document.addEventListener('keydown', handleKeydown);
      setIsModal(() => true);
      closeSidebar();
    } else {
      setTimeout(() => setIsModal(() => false), 300);
    }

    return () => document.removeEventListener('keydown', handleKeydown);
  }, [isAddCart]);

  const toggleModalClick = (id) => {
    setIsAddCart((prevState) => !prevState);
    if (itemFocus) {
      setItemFocus(() => null);
    } else {
      setItemFocus(() => menuItems[id - 1]);
    }
  };

  const toggleModalEnter = (e, id) => {
    if (e.key === 'Enter') {
      setIsAddCart((prevState) => !prevState);
      if (itemFocus) {
        setItemFocus(() => null);
      } else {
        setItemFocus(() => menuItems[id - 1]);
      }
    }
  };

  return (
    <>
      <div className="tile is-ancestor is-justify-content-center">
        <div className="tile is-parent is-flex is-8 is-vertical is-align-items-center">
          {menuItems.map((item) => (
            item.isAvailable && (
              <MenuItem
                image={imgSelector(item.name.toLowerCase())}
                name={item.name}
                price={`₳ ${item.price.toFixed(2)}`}
                alt={item.alt}
                toggleModalClick={() => toggleModalClick(item.id)}
                toggleModalEnter={(e) => toggleModalEnter(e, item.id)}
                forceHover={false}
                key={item.id}
              />
            )
          ))}
        </div>
      </div>
      <div className={`modal ${isModal ? 'is-active' : ''}`} ref={modalRef}>
        <div className="modal-background" onClick={closeModal} />
        <div className="modal-content is-flex is-justify-content-center">
          {itemFocus && (
            <MenuItem
              image={imgSelector(itemFocus.name.toLowerCase())}
              name={itemFocus.name}
              price={`₳${itemFocus.price.toFixed(2)}`}
              alt={itemFocus.alt}
              toggleModalClick={() => toggleModalClick(itemFocus.id)}
              toggleModalEnter={(e) => toggleModalEnter(e, itemFocus.id)}
              forceHover
            />
          )}
          <AddToCart isAddCart={isAddCart} toggleModalClick={toggleModalClick} itemFocus={itemFocus} />
        </div>
        <button className="modal-close is-large" type="button" onClick={toggleModalClick} aria-label="close modal" />
      </div>
    </>
  );
}
