import React from 'react';
import { MdPhoneInTalk } from 'react-icons/md';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <article className="message is-flex-desktop is-justify-content-center is-warning mx-auto" style={{ width: 'fit-content' }}>
      <div className="message-body is-flex-desktop" style={{ gap: '2vw' }}>
        <div className="is-flex is-flex-direction-column mb-3">
          <div className="block">
            <h3 className="is-size-5 has-text-weight-semibold">Call us</h3>
            <a href="tel:+8885557777" target="_blank" rel="noopener noreferrer nofollow">
              <div className="icon-text">
                <span className="icon has-text-danger-dark">
                  <MdPhoneInTalk />
                </span>
                <p className="has-text-grey-dark">(+888)-555-7777</p>
              </div>
            </a>
          </div>
          <div className="block">
            <h3 className="is-size-5 has-text-weight-semibold">Write us</h3>
            <a href="mailto:probably_real@email.com?subject=actually%20just%20a%20sample%20email" target="_blank" rel="noopener noreferrer nofollow">
              <div className="icon-text">
                <span className="icon has-text-danger-dark">
                  <FaEnvelope />
                </span>
                <p className="has-text-grey-dark">probably_real@email.com</p>
              </div>
            </a>
          </div>
          <div className="block">
            <h3 className="is-size-5 has-text-weight-semibold">Visit us</h3>
            <div className="icon-text">
              <p className="has-text-grey-dark">
                <span className="icon has-text-danger-dark">
                  <FaMapMarkerAlt />
                </span>
                218 Garrett Street, Newark City, PA, 19714
              </p>
            </div>
          </div>
        </div>
        <div className="is-flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.6869324163506!2d-77.94947694622003!3d34.2326049819245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aa1fcc72c3c581%3A0x1d4e9af74a5dc3ff!2sCape%20Fear%20Serpentarium!5e0!3m2!1sen!2sph!4v1638504058510!5m2!1sen!2sph"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="map"
          />
        </div>
      </div>
    </article>
  );
}
