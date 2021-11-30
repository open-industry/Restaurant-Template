import React from 'react';

export default function Contact() {
  
  return (
    <>
      <article className="message is-warning">
        <div className="message-header has-text-danger-dark">
          <p>Talk to us</p>
        </div>
        <div className="message-body">
          <p>+5555-921-0129</p>
          <p>+7777-107-8245</p>
          <p>+8888-594-7236</p>
        </div>
      </article>
      <article className="message is-warning">
        <div className="message-header has-text-danger-dark">
        <p>Write to us</p>
        </div>
        <div className="message-body">
          <ul>
            <li><p>realisticAddress@email.com</p></li>
            <li><p>perfectlyNormal@email.com</p></li>
            <li><p>probablyNotTrue@email.com</p></li>
          </ul>
        </div>
      </article>
      <article className="message is-warning">
        <div className="message-header has-text-danger-dark">
          <p>Visit us</p>
        </div>
        <div className="message-body">
          <p>218 Garrett Street, Newark City, PA, 19714</p>
        </div>
      </article>
    </>
  );
};