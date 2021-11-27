import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import "bulma/css/bulma.min.css";

const navItems = ['Home', 'Menu', 'Contact'];

// helper function for font awesome icon className slection based on nav item
const iconClass = (nav) => {
  switch (nav) {
      case navItems[0]:
        return 'fas fa-house';
      case navItems[1]:
        return 'fas fa-utensils';
      case navItems[2]:
        return 'fas fa-phone';
      default:
        return 'fas fa-house';
  };
};


function NavLinks() {
  // state for navbar
  const [activeNav, setActiveNav] = useState(() => navItems[0]);

  // onClick handler for Link component to update activeNav state
  const handleNavClick = (nav) => {
    setActiveNav(pevNav => nav);
  }

  return (
    <>
      {navItems.map((item) => (
        <li key={item} className={item === activeNav ? "is-active" : null}>
          <Link
            to={`/${item !== navItems[0] ? item.toLowerCase() : ""}`}
            className={item === activeNav ? "active-font" : "has-text-warning-dark"}
            onClick={() => handleNavClick(item)}
          >
            <span className={`icon is-small ${item === activeNav ? 'has-text-danger-dark' : 'has-text-grey-dark'}`}>
              <i className={`${iconClass(item)} is-size-6`}></i>
            </span>
            {item}
          </Link>
        </li>
      ))}      
    </>
  )
}

export default NavLinks
