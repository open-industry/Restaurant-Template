/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import { FaCopy } from 'react-icons/fa';
import focusTrap from './focusTrap';

function DonateCard({ img, protocol }) {
  const [showAddress, setShowAddress] = useState(() => false);
  const [isCopy, setIsCopy] = useState(() => false);

  const { symbol, label, address } = protocol;

  const modalRef = useRef();

  useEffect(() => {
    if (isCopy) setTimeout(() => setIsCopy(() => false), 2000);
  }, [isCopy]);

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
    if (showAddress) document.addEventListener('keydown', handleKeydown);

    return () => document.removeEventListener('keydown', handleKeydown);
  }, [showAddress]);

  const handleAddressOnClick = () => {
    navigator.clipboard.writeText(address);
    setIsCopy(() => true);
  };

  return (
    <>
      <button className="button is-warning" type="button" onClick={toggleShowAddress} style={{ minWidth: '150px' }} title={`Donate ${symbol}`} aria-label={`donate ${label}`}>
        <p>{label}</p>
      </button>
      <div className={`modal ${showAddress ? 'is-active' : ''}`} ref={modalRef}>
        <div className="modal-background" onClick={closeModal} />
        <div className="modal-content is-flex is-justify-content-center py-2">
          <div className="card is-flex is-flex-direction-column has-flex-wrap-wrap no-scale" style={{ width: '350px' }}>
            <div className="card-image pt-5">
              <img src={img} alt={`${label} address QR code`} />
            </div>
            <div className="card-content">
              <p className="has-text-warning-dark" style={{ wordWrap: 'break-word' }}>
                {address}
              </p>
              <button className="icon is-clickable is-pulled-right" type="button" onClick={handleAddressOnClick} title="Click to copy" aria-label={`copy ${label} address to clipboard`}>
                <i><FaCopy color="hsl(348, 86%, 43%)" size="1.25em" /></i>
              </button>
              <span className={`tag is-success mx-auto copy-notification ${isCopy ? 'is-active' : ''}`}>{`Copied ${label} address to clipboard`}</span>
            </div>
          </div>
        </div>
        <button className="modal-close is-large" onClick={closeModal} aria-label="close" type="button" />
      </div>
    </>
  );
}

export default DonateCard;
