import React from 'react';
// import { useCartContext } from './CartProvider';

function CartContent({ isShowCart, toggleShowCart }) {
  // const { cartContent, addItem } = useCartContext();
  return (
    <div className={`modal ${isShowCart ? 'is-active' : ''}`}>
      <div className="modal-background" />
      <div className="modal-content is-flex is-justify-content-center">
        <div className="has-background-warning">
          <h1 className="title is-1 has-text-white-ter">McDnld's Cart</h1>
        </div>
      </div>
      <button className="modal-close is-large" type="button" onClick={toggleShowCart} />
    </div>
  );
}

export default CartContent;
