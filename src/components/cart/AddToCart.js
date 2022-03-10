import React, { useState, useEffect, useRef } from 'react';
import { useCartContext } from './CartProvider';
import './AddToCart.css';

const getFocusQty = (cart, item) => {
  const newItemIndex = cart.findIndex((cartItem) => cartItem.item.id === item.id);
  if (newItemIndex === -1) return 1;
  return cart[newItemIndex].qty;
};

function AddToCart({ isAddCart, toggleModalClick, itemFocus }) {
  const { cartContent, addItem } = useCartContext();

  // const [quantity, setQuantity] = useState(itemFocus === null ? 1 : getFocusQty(cartContent, itemFocus));
  const [quantity, setQuantity] = useState(() => 1);

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
    setQuantity(() => Math.max(Number(e.target.min), Math.min(Number(e.target.max), Number(e.target.value))));
  };

  return (
    <div className={`add-to-cart has-background-warning ${isAddCart ? '' : 'slide-out'}`}>
      <form className="field has-addons m-0" onSubmit={(e) => e.preventDefault()}>
        <div className="control">
          <button className="button is-danger" type="button" onClick={handleSubtractOnClick}>-</button>
        </div>
        <div className="control">
          <input
            className="input"
            style={{ width: '4ch', textAlign: 'center' }}
            ref={quantityRef}
            type="number"
            min={1}
            max={99}
            value={quantity}
            onChange={handleOnChange}
          />
        </div>
        <div className="control">
          <button className="button is-danger" type="button" onClick={handleAddOnClick}>+</button>
        </div>
      </form>
      <button
        className="button is-danger"
        style={{ minWidth: '12em', width: '20vw' }}
        type="button"
        onClick={() => {
          addItem(itemFocus, quantity);
          toggleModalClick(itemFocus.id);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddToCart;
