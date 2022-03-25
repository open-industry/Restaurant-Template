import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../components/cart/CartProvider';
import imgSelector from '../img/imgSelector';
import DonateCard from '../components/DonateCard';

const { cryptos } = require('../data/db.json');

function Checkout() {
  const { clearCart } = useCartContext();
  const navigate = useNavigate();

  const clickFooter = () => {
    const footer = document.querySelector('footer>a');
    footer.click();
  };

  const handleDoneOnClick = () => {
    clearCart();
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
          <button className="button is-danger is-outlined" onClick={() => navigate(-1)} type="button" style={{ width: '100px' }}>Previous</button>
          <button className="button is-danger" onClick={handleDoneOnClick} type="button" style={{ width: '100px' }}>Done</button>
        </div>
      </div>
    </article>
  );
}

export default Checkout;
