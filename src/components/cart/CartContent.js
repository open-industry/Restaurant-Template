/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CartEntry from './CartEntry';
import focusTrap from '../focusTrap';
import { useCartContext } from './CartProvider';
import CONSTANTS from '../../data/constants';

// create focus trap and event listeners for modal

const { MINQTY, MAXQTY } = CONSTANTS;

function CartContent({ isShowCart, toggleShowCart, hideCart }) {
  const [invoice, setInvoice] = useState([]);

  const modalRef = useRef();

  const navigate = useNavigate();

  const { cartContent, updateCart } = useCartContext();

  const handleKeydown = (e) => {
    if (e.key === 'Escape') hideCart();

    else if (e.key === 'Tab') focusTrap(e, modalRef.current);
  };

  useEffect(() => {
    if (isShowCart) document.addEventListener('keydown', handleKeydown);

    return () => document.removeEventListener('keydown', handleKeydown);
  }, [isShowCart]);

  useEffect(() => {
    const tempInvoice = cartContent.map((cartItem) => {
      const itemInvoice = { ...cartItem, subtotal: Number((cartItem.item.price * cartItem.qty).toFixed(2)) };
      return itemInvoice;
    });

    setInvoice(() => tempInvoice);
  }, [cartContent]);

  const increment = (index) => {
    setInvoice((prevState) => {
      const tempInvoice = [...prevState];
      tempInvoice[index].qty = Math.max(MINQTY, Math.min(MAXQTY, tempInvoice[index].qty + 1));
      tempInvoice[index].subtotal = Number((tempInvoice[index].item.price * tempInvoice[index].qty).toFixed(2));
      return tempInvoice;
    });
  };

  const decrement = (index) => {
    setInvoice((prevState) => {
      const tempInvoice = [...prevState];
      tempInvoice[index].qty = Math.max(MINQTY, Math.min(MAXQTY, tempInvoice[index].qty - 1));
      tempInvoice[index].subtotal = Number((tempInvoice[index].item.price * tempInvoice[index].qty).toFixed(2));
      return tempInvoice;
    });
  };

  const handleEntryOnChange = (index) => {
    const inputOnChange = (e) => {
      setInvoice((prevState) => {
        const tempInvoice = [...prevState];
        tempInvoice[index].qty = Math.max(MINQTY, Math.min(MAXQTY, Number(e.target.value)));
        tempInvoice[index].subtotal = Number((tempInvoice[index].item.price * tempInvoice[index].qty).toFixed(2));
        return tempInvoice;
      });
    };

    return inputOnChange;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    updateCart(invoice);
    hideCart();
    navigate('/checkout');
  };

  return (
    <div className={`modal ${isShowCart ? 'is-active' : ''}`} ref={modalRef}>
      <div className="modal-background" onClick={hideCart} />
      <div className="modal-content is-flex is-justify-content-center">
        <div className="box has-background-warning">
          {cartContent.length > 0 ? (
            <>
              <h1 className="title is-size-4">Cart</h1>
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
                    {cartContent.length > 0 && invoice.map((invoiceItem, index) => (
                      <CartEntry
                        invoiceItem={invoiceItem}
                        increment={() => increment(index)}
                        decrement={() => decrement(index)}
                        handleEntryOnChange={handleEntryOnChange(index)}
                        key={invoiceItem.item.id}
                      />
                    ))}
                  </tbody>
                </table>
                <div className="is-flex is-justify-content-space-between px-3 mt-5">
                  <p className="is-size-5 has-text-weight-semibold">Total</p>
                  <p className="is-size-5 has-text-weight-semibold">
                    {`₳ ${(invoice.reduce(
                      (accumulator, current) => accumulator + current.subtotal,
                      0,
                    ).toFixed(2)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`}
                  </p>
                </div>
                <div className="control">
                  <button className="button is-danger" type="submit" style={{ width: '100%' }} aria-label="proceed to checkout">Proceed to Checkout</button>
                </div>
              </form>
            </>
          ) : (
            <div className="has-text-centered">
              <h1 className="title has-text-warning-dark">Cart is empty</h1>
            </div>
          )}
        </div>
      </div>
      <button className="modal-close is-large" type="button" onClick={toggleShowCart} aria-label="close modal" />
    </div>
  );
}

export default CartContent;
