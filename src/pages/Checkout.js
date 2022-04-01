import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../components/cart/CartProvider';
import imgSelector from '../img/imgSelector';
import DonateCard from '../components/DonateCard';

// import crypto data
const { cryptos } = require('../data/db.json');

function Checkout() {
  // clearCart custom hook from CartProvider sets cart state to empty array
  const { clearCart } = useCartContext();

  // useNaviage hook from react-router-dom used to programmatically navigate using function
  const navigate = useNavigate();

  // click handler for Work With Me button opens developers personal github repo
  const clickFooter = () => {
    const footer = document.querySelector('footer>a');
    footer.click();
  };

  // onClick handler for "previous" button
  const handlePreviousOnClick = () => {
    const cartButton = document.getElementById('cart-button');
    // navigate to previous page
    navigate(-1);
    // open cart modal on previous page
    cartButton.click();
  };

  // onClick handler for "done" button
  const handleDoneOnClick = () => {
    // set cart state to empty array
    clearCart();
    // navigate to home page
    navigate('/');
  };

  return (
    <article className="message is-warning mx-auto">
      <div className="message-body has-text-centered">
        <p className="is-size-2">Coming Soon </p>
        <p className="is-size-4 has-text-weight-light">Support a struggling developer</p>
        <div className="is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-center donate-container py-3">
          {cryptos.map((protocol) => protocol.isAvailable && (
            <DonateCard
              img={imgSelector(protocol.name)}
              protocol={protocol}
              key={protocol.id}
            />
          ))}
          <button className="button is-warning" onClick={clickFooter} type="button" style={{ minWidth: '150px' }} title="Offer work">
            <p>Work With Me</p>
          </button>
        </div>
        <p className="is-size-4 has-text-weight-light">UNDER CONSTRUCTION</p>
        <div className="buttons is-justify-content-center mt-5">
          {/* "previous" button */}
          <button className="button is-danger is-outlined" onClick={handlePreviousOnClick} type="button" style={{ width: '100px' }}>Previous</button>
          {/* "done" button */}
          <button className="button is-danger" onClick={handleDoneOnClick} type="button" style={{ width: '100px' }}>Done</button>
        </div>
      </div>
    </article>
  );
}

export default Checkout;
