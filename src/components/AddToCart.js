import React, { useState, useRef } from 'react';
import './AddToCart.css';

function AddToCart() {
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
    <div className="add-to-cart has-background-warning">
      <form className="field has-addons" onSubmit={(e) => e.preventDefault()}>
        <div className="control">
          <button className="button is-danger" type="button" onClick={handleSubtractOnClick}>-</button>
        </div>
        <div className="control">
          <input className="input" ref={quantityRef} type="number" min={1} max={99} value={quantity} onChange={handleOnChange} />
        </div>
        <div className="control">
          <button className="button is-danger" type="button" onClick={handleAddOnClick}>+</button>
        </div>
      </form>
    </div>
  );
}

export default AddToCart;
