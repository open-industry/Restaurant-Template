import React from 'react';
import CartEntry from './CartEntry';
import { useCartContext } from './CartProvider';

function CartContent({ isShowCart, toggleShowCart }) {
  const { cartContent } = useCartContext();
  return (
    <div className={`modal ${isShowCart ? 'is-active' : ''}`}>
      <div className="modal-background" />
      <div className="modal-content is-flex is-justify-content-center">
        <div className="box has-background-warning">
          <form onSubmit={(e) => e.preventDefault()}>
            <table className="table is-fullwidth">
              <thead>
                <tr>
                  <th><abbr>Qty</abbr></th>
                  <th>Item</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartContent.length > 0 && cartContent.map((cartItem) => (
                  <CartEntry cartItem={cartItem} key={cartItem.item.id} />
                ))}
              </tbody>
            </table>
            {cartContent.length === 0 && (
              <div className="has-text-centered">
                <h1 className="title">
                  Cart is empty
                </h1>
              </div>
            )}
          </form>
        </div>
      </div>
      <button className="modal-close is-large" type="button" onClick={toggleShowCart} />
    </div>
  );
}

export default CartContent;
