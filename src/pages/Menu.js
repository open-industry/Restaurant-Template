/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import AddToCart from '../components/cart/AddToCart';
import MenuItem from '../components/MenuItem';
import imgSelector from '../img/imgSelector';
import focusTrap from '../components/focusTrap';

// import menu data
const { items: menuItems } = require('../data/db.json');

// Menu component expects one prop closeSidebar: function
export default function Menu({ closeSidebar }) {
  // open/close AddToCart modal state
  const [isAddCart, setIsAddCart] = useState(() => false);
  // item selected by user
  const [itemFocus, setItemFocus] = useState(() => null);
  // open/close addcart modal state, triggered by isAddCart state with 300ms delay
  const [isModal, setIsModal] = useState(() => false);

  // ref of modal container for focus trap
  const modalRef = useRef();

  // wrapper function for closing modal
  const closeModal = () => {
    setIsAddCart(() => false);
    setItemFocus(() => null);
  };

  // keydown event handler for modal
  const handleKeydown = (e) => {
    // close modal on esc
    if (e.key === 'Escape') closeModal();

    // trap focus in modal container for keyboard navigation
    else if (e.key === 'Tab') focusTrap(e, modalRef.current);
  };

  // add/remove keydown event listener for modal
  useEffect(() => {
    if (isAddCart) {
      // add keydown event listener
      document.addEventListener('keydown', handleKeydown);
      // open modal
      setIsModal(() => true);
      // always close sidebar on modal open
      closeSidebar();
    } else {
      // delay modal close for 300ms to allow AddToCart component animation to finish
      setTimeout(() => setIsModal(() => false), 300);
    }

    // cleanup event listener when component unmounts
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [isAddCart]);

  // on item click, open/close AddToCart component
  // expects one argument id: number
  const toggleModalClick = (id) => {
    setIsAddCart((prevState) => !prevState);
    if (itemFocus) {
      // set itemfocus to null if item is clicked again
      setItemFocus(() => null);
    } else {
      // set itemfocus to id of clicked item
      setItemFocus(() => menuItems[id - 1]);
    }
  };

  // on item enter, open/close AddToCart component for keyboard navigation
  // expects two arguments, e: event and id: number
  const toggleModalEnter = (e, id) => {
    if (e.key === 'Enter') {
      setIsAddCart((prevState) => !prevState);
      if (itemFocus) {
        // set itemfocus to null on when modal is closed
        setItemFocus(() => null);
      } else {
        // set itemfocus to id on enter of focused item
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
                toggleModalClick={() => toggleModalClick(item.id)} // click handler with menu item id
                toggleModalEnter={(e) => toggleModalEnter(e, item.id)} // enter handler with menu item id
                forceHover={false} // prop for hover effect if item is focused
                key={item.id}
              />
            )
          ))}
        </div>
      </div>
      <div className={`modal ${isModal ? 'is-active' : ''}`} ref={modalRef}>
        {/* close modal on background click */}
        <div className="modal-background" onClick={closeModal} />
        <div className="modal-content is-flex is-justify-content-center" style={{ maxWidth: '95vmin' }}>
          {/* render focused item on modal */}
          {itemFocus && (
            <MenuItem
              image={imgSelector(itemFocus.name.toLowerCase())}
              name={itemFocus.name}
              price={`₳${itemFocus.price.toFixed(2)}`}
              alt={itemFocus.alt}
              toggleModalClick={() => toggleModalClick(itemFocus.id)}
              toggleModalEnter={(e) => toggleModalEnter(e, itemFocus.id)}
              forceHover // prop to force hover effect on focused item
            />
          )}
          {/* AddToCart UI component for adding items to cart */}
          <AddToCart isAddCart={isAddCart} toggleModalClick={toggleModalClick} itemFocus={itemFocus} />
        </div>
        <button className="modal-close is-large" type="button" onClick={toggleModalClick} aria-label="close modal" />
      </div>
    </>
  );
}
