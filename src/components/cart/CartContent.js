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
          {cartContent.length > 0 ? (
            <>
              <form onSubmit={(e) => e.preventDefault()}>
                <table className="table is-fullwidth">
                  <thead>
                    <tr>
                      <th><abbr>Qty</abbr></th>
                      <th>Item</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartContent.length > 0 && cartContent.map((cartItem) => (
                      <CartEntry cartItem={cartItem} key={cartItem.item.id} />
                    ))}
                  </tbody>
                </table>
              </form>
              <div className="is-flex is-justify-content-space-between px-3 mt-4">
                <p>Total</p>
                <p>
                  {`₳ ${cartContent.reduce(
                    (accumulator, current) => accumulator + current.item.price * current.qty,
                    0,
                  ).toFixed(2)}`}
                </p>
              </div>
              <div className="control">
                <button className="button is-danger" type="submit" style={{ width: '100%' }}>Proceed to Checkout</button>
              </div>
            </>
          ) : (
            <div className="has-text-centered">
              <h1 className="title">Cart is empty</h1>
            </div>
          )}
        </div>
      </div>
      <button className="modal-close is-large" type="button" onClick={toggleShowCart} />
    </div>
  );
}

export default CartContent;
