import React, { useState, useEffect } from 'react';
import CartEntry from './CartEntry';
import { useCartContext } from './CartProvider';

function CartContent({ isShowCart, toggleShowCart }) {
  const [invoice, setInvoice] = useState([]);
  const { cartContent } = useCartContext();

  useEffect(() => {
    const tempInvoice = cartContent.map((cartItem) => {
      const itemInvoice = { ...cartItem, subtotal: Number((cartItem.item.price * cartItem.qty).toFixed(2)) };
      return itemInvoice;
    });

    setInvoice(() => tempInvoice);
  }, [cartContent]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <div className={`modal ${isShowCart ? 'is-active' : ''}`}>
      <div className="modal-background" />
      <div className="modal-content is-flex is-justify-content-center">
        <div className="box has-background-warning">
          {cartContent.length > 0 ? (
            <form onSubmit={handleOnSubmit}>
              <table className="table is-fullwidth" style={{ borderRadius: '8px', backgroundColor: '#fffaeb' }}>
                <thead>
                  <tr>
                    <th><abbr>Qty</abbr></th>
                    <th>Item</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartContent.length > 0 && invoice.map((invoiceItem) => (
                    <CartEntry invoiceItem={invoiceItem} key={invoiceItem.item.id} />
                  ))}
                </tbody>
              </table>
              <div className="is-flex is-justify-content-space-between px-3 mt-5">
                <p className="has-text-weight-semibold">Total</p>
                <p className="has-text-weight-semibold">
                  {`₳ ${(invoice.reduce(
                    (accumulator, current) => accumulator + current.subtotal,
                    0,
                  ).toFixed(2)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`}
                </p>
              </div>
              <div className="control">
                <button className="button is-danger" type="submit" style={{ width: '100%' }}>Proceed to Checkout</button>
              </div>
            </form>
          ) : (
            <div className="has-text-centered">
              <h1 className="title has-text-warning-dark">Cart is empty</h1>
            </div>
          )}
        </div>
      </div>
      <button className="modal-close is-large" type="button" onClick={toggleShowCart} />
    </div>
  );
}

export default CartContent;
