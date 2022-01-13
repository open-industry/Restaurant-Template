import React from 'react';
import NavLinks from './NavLinks';
import { useNavContext } from './navContext';

function HorizontalNav() {
  // location provided as context by navContext.js
  const location = useNavContext();

  return (
    <div className="tabs is-large is-boxed is-centered is-hidden-touch">
      <ul>
        <NavLinks location={location} />
      </ul>
    </div>
  );
}

export default HorizontalNav;
