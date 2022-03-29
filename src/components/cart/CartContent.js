/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import CartEntry from './CartEntry';
import focusTrap from '../focusTrap';
import { useCartContext } from './CartProvider';
import CONSTANTS from '../../data/constants';

const { MINQTY, MAXQTY } = CONSTANTS;

function CartContent({ isShowCart, hideCart }) {
  const [invoice, setInvoice] = useState([]);

  const modalRef = useRef();

  const navigate = useNavigate();

  const { cartContent, updateCart } = useCartContext();

  const syncInvoice = () => {
    setInvoice(() => cartContent.map((cartItem) => (
      { ...cartItem, subtotal: Number((cartItem.item.price * cartItem.qty).toFixed(2)) }
    )));
  };

  const closeModal = () => {
    syncInvoice();
    hideCart();
  };

  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      syncInvoice();
      hideCart();
    } else if (e.key === 'Tab') focusTrap(e, modalRef.current);
  };

  useEffect(() => {
    if (isShowCart) document.addEventListener('keydown', handleKeydown);

    return () => document.removeEventListener('keydown', handleKeydown);
  }, [isShowCart]);

  useEffect(() => {
    syncInvoice();
  }, [cartContent]);

  const increment = (index) => {
    setInvoice((prevState) => prevState.map((invoiceItem, i) => (
      i === index ? {
        ...invoiceItem,
        qty: Math.min(MAXQTY, invoiceItem.qty + 1),
        subtotal: Number((Math.min(MAXQTY, invoiceItem.qty + 1) * invoiceItem.item.price).toFixed(2)),
      } : invoiceItem)));
  };

  const decrement = (index) => {
    setInvoice((prevState) => prevState.map((invoiceItem, i) => (
      i === index ? {
        ...invoiceItem,
        qty: Math.max(MINQTY, invoiceItem.qty - 1),
        subtotal: Number((Math.max(MINQTY, invoiceItem.qty - 1) * invoiceItem.item.price).toFixed(2)),
      } : invoiceItem)));
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
      <div className="modal-background" onClick={closeModal} />
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
            <div className="has-text-centered p-3">
              <span className="icon" style={{ height: '5rem', width: '5rem' }}>
                <i><MdOutlineRemoveShoppingCart size="80px" color="hsl(348, 86%, 43%)" /></i>
              </span>
              <h1 className="title has-text-warning-dark">Cart is empty</h1>
            </div>
          )}
        </div>
      </div>
      <button className="modal-close is-large" type="button" onClick={closeModal} aria-label="close modal" />
    </div>
  );
}

export default CartContent;
