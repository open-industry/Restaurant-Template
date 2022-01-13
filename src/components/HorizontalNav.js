import React from 'react';
import { useNavContext } from './NavLinks.js';

function HorizontalNav() {
  // NavLinks component provided as context by NavLinks.js
  const NavLinks = useNavContext();

  return (
    <div className="tabs is-large is-boxed is-centered is-hidden-touch">
      <ul>
        <NavLinks />
      </ul>
    </div>
  );
}

export default HorizontalNav;
