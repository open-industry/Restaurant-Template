/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import focusTrap from './focusTrap';

function DonateCard({ img, address, label }) {
  const [showAddress, setShowAddress] = useState(() => false);

  const modalRef = useRef();

  const toggleShowAddress = () => {
    setShowAddress((prevState) => !prevState);
  };

  const closeModal = () => {
    setShowAddress(() => false);
  };

  const handleKeydown = (e) => {
    if (e.key === 'Escape') closeModal();

    else if (e.key === 'Tab') focusTrap(e, modalRef.current);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);
  return (
    <>
      <button className="button is-warning" type="button" onClick={toggleShowAddress} style={{ minWidth: '150px' }} aria-label={`donate ${label}`}>
        <p>{label}</p>
      </button>
      <div className={`modal ${showAddress ? 'is-active' : ''}`} ref={modalRef}>
        <div className="modal-background" onClick={closeModal} />
        <div className="modal-content is-flex is-justify-content-center py-1">
          <div className="card is-flex is-flex-direction-column has-flex-wrap-wrap no-scale" style={{ width: '350px' }}>
            <div className="card-image pt-5">
              <img src={img} alt={`${label} address QR code`} />
            </div>
            <div className="card-content">
              <p className="has-text-warning-dark" style={{ wordWrap: 'break-word' }}>
                {address}
              </p>
            </div>
          </div>
        </div>
        <button className="modal-close is-large" onClick={closeModal} aria-label="close" type="button" />
      </div>
    </>
  );
}

export default DonateCard;
