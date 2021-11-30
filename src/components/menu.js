import React from 'react';

export default function Menu() {

  return (
    <div className="is-flex is-flex-direction-column is-align-items-center pt-5">
      <article className="message is-warning">
        <div className="message-header has-text-danger-dark">
          <p>About</p>
        </div>
        <div className="message-body">
          <p>Bla bla bla bla</p>
        </div>
      </article>
      <article className="message is-warning">
        <div className="message-header has-text-danger-dark">
          <p>Hours</p>
        </div>
        <div className="message-body">
          <p>Bla bla bla bla</p>
        </div>
      </article>
      <article className="message is-warning">
        <div className="message-header has-text-danger-dark">
          <p>Location</p>
        </div>
        <div className="message-body">
          <p>Bla bla bla bla</p>
        </div>
      </article>
    </div>
  );
};