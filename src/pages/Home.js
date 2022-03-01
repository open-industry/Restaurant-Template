import React from 'react';
import mcdnld from '../img/mcdnld.png';

export default function Home() {
  return (
    <article className="message is-warning mx-auto">
      <div className="message-body has-text-centered">
        <p className="is-size-3 is-size-4-mobile has-text-weight-semibold">Why so serious?</p>
        <p className="is-size-5">Put a smile on that face!</p>
        <div className="box mt-5 mx-auto p-0 img-container is-transparent">
          <figure className="image is-1by1">
            <img className="is-rounded" src={mcdnld} alt="mcdnld" />
          </figure>
        </div>
        <p className="is-size-5 is-size-6-mobile is-italic has-text-weight-light">
          "Best slow food with secret blend of 1 herb and spice"
          <br />
          —General Saunders
        </p>
      </div>
    </article>
  );
}
