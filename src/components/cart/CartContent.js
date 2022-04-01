/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import CartEntry from './CartEntry';
import focusTrap from '../focusTrap';
import { useCartContext } from './CartProvider';
import CONSTANTS from '../../data/constants';

// imort minimum and maximum quantity values from constants
const { MINQTY, MAXQTY } = CONSTANTS;

// CartContent component expects two props:
// isAddCart: buolean and toggleModalClick: function
function CartContent({ isShowCart, hideCart }) {
  // invoice state derived from cartContent hook provided by useCartContext
  const [invoice, setInvoice] = useState([]);

  // modal ref used for focus trap
  const modalRef = useRef();

  // useNavigate hook to programatically navigate to checkout page
  const navigate = useNavigate();

  //  consume cartContent cart state and updateCart hook provided by CartProvider
  const { cartContent, updateCart } = useCartContext();

  // helper function sync invoice state with cartContent state
  // creates subtotal key for each cart item in cartContent
  const syncInvoice = () => {
    setInvoice(() => cartContent.map((cartItem) => (
      { ...cartItem, subtotal: Number((cartItem.item.price * cartItem.qty).toFixed(2)) }
    )));
  };

  // wrapper function for closing CartContent modal
  const closeModal = () => {
    syncInvoice();
    hideCart();
  };

  // keydown event handler for CartContent modal
  const handleKeydown = (e) => {
    // close modal on esc
    if (e.key === 'Escape') {
      syncInvoice();
      hideCart();
      // trap focus in modal container for keyboard navigation
    } else if (e.key === 'Tab') focusTrap(e, modalRef.current);
  };

  // add/remove keydown event listener for CartContent modal
  useEffect(() => {
    // add keydown event listener
    if (isShowCart) document.addEventListener('keydown', handleKeydown);

    // cleanup event listener when component unmounts
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [isShowCart]);

  // synce invoice state with cartContent state when cartContent state changes
  useEffect(() => {
    syncInvoice();
  }, [cartContent]);

  // onClick event handler to increment cart item quantity
  // expects one argument index: number
  const increment = (index) => {
    setInvoice((prevState) => prevState.map((invoiceItem, i) => (
      i === index ? {
        ...invoiceItem,
        qty: Math.min(MAXQTY, invoiceItem.qty + 1), // increment quantity
        subtotal: Number((Math.min(MAXQTY, invoiceItem.qty + 1) * invoiceItem.item.price).toFixed(2)), // update subtotal
      } : invoiceItem)));
  };

  // onClick event handler to decrement cart item quantity
  // expects one argument index: number
  const decrement = (index) => {
    setInvoice((prevState) => prevState.map((invoiceItem, i) => (
      i === index ? {
        ...invoiceItem,
        qty: Math.max(MINQTY, invoiceItem.qty - 1), // decrement item quantity
        subtotal: Number((Math.max(MINQTY, invoiceItem.qty - 1) * invoiceItem.item.price).toFixed(2)), // update subtotal
      } : invoiceItem)));
  };

  // factory function for onChange event handler to update cart item quantity input
  // expects one argument index: number
  // returns inputOnChange event handler function that accepts event object
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

  // onSubmit event handler for CartContent form
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // update cartContent state with invoice state
    updateCart(invoice);
    // close CartContent modal
    hideCart();
    // navigate to checkout page
    navigate('/checkout');
  };

  return (
    <div className={`modal ${isShowCart ? 'is-active' : ''}`} ref={modalRef}>
      {/* close modal on background click */}
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-content is-flex is-justify-content-center">
        <div className="box has-background-warning">
          {cartContent.length > 0 ? ( // render if cartContent is not empty
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
                    {/* render invoice for each item in cartContent state */}
                    {cartContent.length > 0 && invoice.map((invoiceItem, index) => (
                      <CartEntry
                        invoiceItem={invoiceItem}
                        increment={() => increment(index)}
                        decrement={() => decrement(index)}
                        handleEntryOnChange={handleEntryOnChange(index)} // pass index to handleEntryOnChange factory function to create custom event handler for input
                        key={invoiceItem.item.id}
                      />
                    ))}
                  </tbody>
                </table>
                <div className="is-flex is-justify-content-space-between px-3 mt-5">
                  <p className="is-size-5 has-text-weight-semibold">Total</p>
                  {/* invoice total */}
                  <p className="is-size-5 has-text-weight-semibold">
                    {`₳ ${(invoice.reduce(
                      (accumulator, current) => accumulator + current.subtotal,
                      0,
                    ).toFixed(2)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}` /* format invoice total with comma separators */}
                  </p>
                </div>
                <div className="control">
                  {/* submit button */}
                  <button className="button is-danger" type="submit" style={{ width: '100%' }} aria-label="proceed to checkout">Proceed to Checkout</button>
                </div>
              </form>
            </>
          ) : ( // reder if cartContent is empty
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
