import React from 'react';
import imgSelector from '../img/imgSelector';
import DonateCard from '../components/DonateCard';

function Checkout() {
  const focusFooter = () => {
    const footer = document.querySelector('footer>a');
    footer.click();
  };

  return (
    <article className="message is-warning mx-auto">
      <div className="message-body has-text-centered">
        <p className="is-size-2">Coming Soon </p>
        <p className="is-size-4 has-text-weight-light">Support a struggling developer</p>
        <div className="is-flex is-flex-direction-column is-align-items-center donate-container py-3">
          <DonateCard img={imgSelector('bitcoin')} address="bc1qgwluzwpe8t39fqqylsxvd0lp6d0wyw2md2r7nm" label="BTC &#40;SegWit&#41;" />
          <DonateCard img={imgSelector('cardano')} address="DdzFFzCqrhssNBn9HMyQudRhP1nN2NEheFz57BKipZhBS9RiCFxb31U7KgjFioCyVG33VcAsVXZwwYfG6DSYKs46tN3M8SMkph1jYmfE" label="ADA" />
          <button className="button is-warning" onClick={focusFooter} type="button" style={{ minWidth: '150px' }}>
            <p>Work With Me</p>
          </button>
        </div>
        <p className="is-size-4 has-text-weight-light">UNDER CONSTRUCTION</p>
      </div>
    </article>
  );
}

export default Checkout;
