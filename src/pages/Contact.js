import React from 'react';
import { MdPhoneInTalk } from 'react-icons/md';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  
  return (
    <>
      <article className="message is-warning mx-auto">
        <div className="message-body">
          <div className="block">
            <h3 className="is-size-5">Talk to us</h3>
            <div className="icon-text">
              <span className="icon">
                <MdPhoneInTalk />
              </span>
              <p>(+888)-555-7777</p>
            </div>
          </div>
          <div className="block">
            <h3 className="is-size-5">Write us</h3>
            <div className="icon-text">
              <span className="icon">
                <FaEnvelope />
              </span>
              <p>probably_real@email.com</p>
            </div>
          </div>
          <div className="block">
            <h3 className="is-size-5">Visit us</h3>
            <div className="icon-text">
              <p>
                <span className="icon">
                  <FaMapMarkerAlt/>
                </span>
                218 Garrett Street, Newark City, PA, 19714
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};