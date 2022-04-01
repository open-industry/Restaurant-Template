import React, { useState, useEffect, useRef } from 'react';
import { useCartContext } from './CartProvider';
import CONSTANTS from '../../data/constants';
import './AddToCart.css';

// import minimum and maximum quantity values from constants
const { MINQTY, MAXQTY } = CONSTANTS;

// helper function to get item quantity for qunatity state
// expects two arguments, cart: array and item: object
const getFocusQty = (cart, item) => {
  // get index of item in cart
  const newItemIndex = cart.findIndex((cartItem) => cartItem.item.id === item.id);
  // if item is not in cart, return default minimum qunatity value
  if (newItemIndex === -1) return MINQTY;
  // return quantity of item in cart
  return cart[newItemIndex].qty;
};

// AddToCart component expects three props:
// isAddCart: boolean, toggleModalClick: function, itemFocus: object
function AddToCart({ isAddCart, toggleModalClick, itemFocus }) {
  // quantity state for quantity input
  const [quantity, setQuantity] = useState(() => MINQTY);

  // cartContent exposes cart state and addItem appends item to cart custom hook from CartProvider
  const { cartContent, addItem } = useCartContext();

  // set qunatity state to item quantity in cart or minimum quantity on modal open
  useEffect(() => {
    if (isAddCart) setQuantity(() => getFocusQty(cartContent, itemFocus));
  }, [isAddCart]);

  // input ref for quantity input
  const quantityRef = useRef();

  // onClick handler for decrement quantity button
  const handleDecrementOnClick = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, quantityRef.current.min));
  };

  // onClick handler for increment quantity button
  const handleIncrementOnClick = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, quantityRef.current.max));
  };

  // onChange handler for quantity input
  const handleOnChange = (e) => {
    setQuantity(() => Math.max(e.target.min, Math.min(e.target.max, e.target.value)));
  };

  // onSubmit handler for add to cart form
  // expects three arguments, e: event, item: object, qty: number
  const handleSubmit = (e, item, qty) => {
    e.preventDefault();
    // add item and quantity to cart context
    addItem(item, qty);
    // close modal
    toggleModalClick(item.id);
  };

  return (
    <div className={`add-to-cart has-background-warning ${isAddCart ? '' : 'slide-out'}`}>
      <form className="field has-addons m-0" onSubmit={(e) => handleSubmit(e, itemFocus, quantity)}>
        {/* "decrement" button */}
        <div className="control">
          <button className="button is-danger" type="button" onClick={handleDecrementOnClick} aria-label="decrement">-</button>
        </div>
        {/* quantity input */}
        <div className="control">
          <input
            className="input p-0"
            style={{ width: '4ch', textAlign: 'center' }}
            ref={quantityRef}
            type="number"
            min={MINQTY}
            max={MAXQTY}
            value={Number(quantity).toString()}
            onChange={handleOnChange}
            aria-label="quantity"
          />
        </div>
        {/* "increment" button */}
        <div className="control">
          <button className="button is-danger" type="button" onClick={handleIncrementOnClick} aria-label="increment">+</button>
        </div>
      </form>
      {/* submit button */}
      <div className="control">
        <button
          className="button is-danger"
          style={{ minWidth: '12em', width: '20vw' }}
          type="submit"
          onClick={() => {
            addItem(itemFocus, quantity);
            toggleModalClick(itemFocus.id);
          }}
          aria-label="add to cart"
          disabled={quantity === MINQTY}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
