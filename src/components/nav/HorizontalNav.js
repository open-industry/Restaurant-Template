import React from 'react';
import { useLocation } from 'react-router-dom';
import NavLinks from './NavLinks';

function HorizontalNav() {
  const location = useLocation();

  return (
    <div className="tabs is-large is-boxed is-centered is-hidden-touch">
      <ul>
        <NavLinks location={location} />
      </ul>
    </div>
  );
}

export default HorizontalNav;
