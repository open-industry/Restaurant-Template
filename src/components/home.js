import React from 'react';
import mcdnld from '../img/mcdnld.png';

export default function Home() {

  return (
    <>    
      <article className="message is-warning">
        <div className="message-body has-text-centered">
          <p>Why so serious?</p>
          <p>Put a smile on that face!</p>
          <div className="box mt-5 mx-auto img-container">
            <figure className="image is-1by1">
              <img className="is-rounded" src={mcdnld} alt="mcdnld" />
            </figure>
          </div>
          <p>Best slow food with secret blend of 1 herb and spice</p>
        </div>
      </article>
    </>
  );
};