import React from 'react';
import imgSelector from '../img/imgSelector';

function Checkout() {
  return (
    <article className="message is-warning mx-auto">
      <div className="message-body has-text-centered">
        <p className="is-size-2">Coming Soon </p>
        <p className="is-size-4 has-text-weight-light">Support a struggling developer</p>
        <div className="card">
          <div className="card-image pt-5">
            <img src={imgSelector('bitcoin')} alt="bitcoin address QR code" />
          </div>
          <div className="card-content">
            <p className="has-text-warning-dark">
              bc1qgwluzwpe8t39fqqylsxvd0lp6d0wyw2md2r7nm
            </p>
          </div>
        </div>
        <p className="is-size-4 has-text-weight-light">UNDER CONSTRUCTION</p>
      </div>
    </article>
  );
}

export default Checkout;
