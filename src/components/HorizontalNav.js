import React from 'react';
import NavLinks from './NavLinks';

function HorizontalNav() {
  return (
    <div className="tabs is-large is-boxed is-centered is-hidden-touch">
      <ul>
        <NavLinks />
      </ul>
    </div>
  )
}

export default HorizontalNav
