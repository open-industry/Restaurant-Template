/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import { FaCopy } from 'react-icons/fa';
import focusTrap from './focusTrap';

// DonateCard component expects two props img: image and protocol: json object
function DonateCard({ img, protocol }) {
  // show/hide showAddress modal state
  const [showAddress, setShowAddress] = useState(() => false);
  // isCopy tool tip notification state
  const [isCopy, setIsCopy] = useState(() => false);

  // destructure relevant data from protocol prop
  const { symbol, label, address } = protocol;

  // ref of modal container for focus trap
  const modalRef = useRef();

  // show isCopy tool tip notifcation for 2 seconds
  useEffect(() => {
    // set isCopy state to false after 2 seconds
    if (isCopy) setTimeout(() => setIsCopy(() => false), 2000);
  }, [isCopy]);

  // onClick handler for protocol button, open/close address modal
  const toggleShowAddress = () => {
    setShowAddress((prevState) => !prevState);
  };

  // close address modal
  const closeModal = () => {
    setShowAddress(() => false);
  };

  // keydown eventhandl for modal
  const handleKeydown = (e) => {
    // close modal on esc
    if (e.key === 'Escape') closeModal();

    // trap focus in modal container for tab navigation
    else if (e.key === 'Tab') focusTrap(e, modalRef.current);
  };

  // add/remove event listener for keydown event modal
  useEffect(() => {
    // add keydown event listener
    if (showAddress) document.addEventListener('keydown', handleKeydown);

    // cleanup event listener when component unmounts
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [showAddress]);

  // onClick handler for copy button
  const handleAddressOnClick = () => {
    // copy protocol address to clipboard
    navigator.clipboard.writeText(address);
    // show isCopy tool tip notification
    setIsCopy(() => true);
  };

  return (
    <>
      <button className="button is-warning" type="button" onClick={toggleShowAddress} style={{ minWidth: '150px' }} title={`Donate ${symbol}`} aria-label={`donate ${label}`}>
        <p>{label}</p>
      </button>
      <div className={`modal ${showAddress ? 'is-active' : ''}`} ref={modalRef}>
        {/* close modal on background click */}
        <div className="modal-background" onClick={closeModal} />
        <div className="modal-content is-flex is-justify-content-center py-2">
          <div className="card is-flex is-flex-direction-column has-flex-wrap-wrap no-scale" style={{ width: '350px' }}>
            {/* render protocol address QR code on modal */}
            <div className="card-image pt-5">
              <img src={img} alt={`${label} address QR code`} />
            </div>
            <div className="card-content">
              <p className="has-text-warning-dark has-text-left" style={{ wordWrap: 'break-word' }}>
                {address}
              </p>
              {/* copy protocol address button */}
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
