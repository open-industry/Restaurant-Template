import React from 'react';

function MenuItem({ image, name, price, alt }) {
  return (
    <article className="tile is-child notification is-warning is-light p-5">
      <div className="card">
        <div className="card-image has-text-centered">
          <img src={image} alt={alt} />
        </div>
        <div className="card-content">
          <p className="has-text-warning-dark">{price}</p>
          <p className="title is-5">{name}</p>
        </div>
      </div>
    </article>
  );
}

export default MenuItem;
