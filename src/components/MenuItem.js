import React from 'react';

// MenuItem component expects seven props
// image: image, name: string, price: string, alt: string, toggleModalClick: function, toggleModalEnter: function, forceHover: boolean
function MenuItem({ image, name, price, alt, toggleModalClick, toggleModalEnter, forceHover }) {
  return (
    <article className="tile is-child notification is-warning is-light p-5">
      {/* force :hover pseudo class style rules for AddToCart component if item is selected */}
      <div className={`card ${forceHover ? 'hovered' : ''}`} onClick={toggleModalClick} onKeyPress={toggleModalEnter} role="button" tabIndex={0} aria-label={name}>
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
