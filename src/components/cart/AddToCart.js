import React, { useState, useRef } from 'react';
// import { useCartContext } from './CartProvider';
import './AddToCart.css';

function AddToCart({ isAddCart }) {
  // const { cartContent, addItem } = useCartContext();
  const [quantity, setQuantity] = useState(() => 1);

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
      <button className="button is-danger" style={{ minWidth: '12em', width: '20vw' }} type="button">Add to cart</button>
    </div>
  );
}

export default AddToCart;
