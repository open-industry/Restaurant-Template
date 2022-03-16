import React, { useState, useEffect, useRef } from 'react';
import { useCartContext } from './CartProvider';
import CONSTANTS from '../../data/constants';
import './AddToCart.css';

const { MINQTY, MAXQTY } = CONSTANTS;

const getFocusQty = (cart, item) => {
  const newItemIndex = cart.findIndex((cartItem) => cartItem.item.id === item.id);
  if (newItemIndex === -1) return MINQTY;
  return cart[newItemIndex].qty;
};

function AddToCart({ isAddCart, toggleModalClick, itemFocus }) {
  const { cartContent, addItem } = useCartContext();

  const [quantity, setQuantity] = useState(() => MINQTY);

  useEffect(() => {
    if (isAddCart) setQuantity(() => getFocusQty(cartContent, itemFocus));
  }, [isAddCart]);

  const quantityRef = useRef();

  const handleSubtractOnClick = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, quantityRef.current.min));
  };

  const handleAddOnClick = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, quantityRef.current.max));
  };

  const handleOnChange = (e) => {
    setQuantity(() => Math.max(e.target.min, Math.min(e.target.max, e.target.value)));
  };

  const handleSubmit = (e, item, qty) => {
    e.preventDefault();
    addItem(item, qty);
    toggleModalClick(item.id);
  };

  return (
    <div className={`add-to-cart has-background-warning ${isAddCart ? '' : 'slide-out'}`}>
      <form className="field has-addons m-0" onSubmit={(e) => handleSubmit(e, itemFocus, quantity)}>
        <div className="control">
          <button className="button is-danger" type="button" onClick={handleSubtractOnClick}>-</button>
        </div>
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
          />
        </div>
        <div className="control">
          <button className="button is-danger" type="button" onClick={handleAddOnClick}>+</button>
        </div>
      </form>
      <div className="control">
        <button
          className="button is-danger"
          style={{ minWidth: '12em', width: '20vw' }}
          type="submit"
          onClick={() => {
            addItem(itemFocus, quantity);
            toggleModalClick(itemFocus.id);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
