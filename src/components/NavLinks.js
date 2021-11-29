import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaUtensils, FaPhoneAlt } from 'react-icons/fa';
import { IoHomeSharp } from 'react-icons/io5';
import "../App.css";
import "bulma/css/bulma.min.css";

const navItems = ['Home', 'Menu', 'Contact'];


// helper function for font awesome icon className slection based on nav item
const iconSelector = (nav) => {
  switch (nav) {
    case navItems[0]:
      return <IoHomeSharp />;
    case navItems[1]:
      return <FaUtensils />;
    case navItems[2]:
      return <FaPhoneAlt />;
    default:
      return <IoHomeSharp />;
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
        <li key={item} className={item === activeNav ? "is-active" : ""}>
          <Link
            to={`/${item !== navItems[0] ? item.toLowerCase() : ""}`}
            className={item === activeNav ? "active-font" : "has-text-warning-dark"}
            onClick={() => handleNavClick(item)}
          >
            <div className="icon-text is-align-items-center">
              <span className={`icon ${item === activeNav ? 'has-text-danger-dark' : 'has-text-grey-dark'}`}>
                {/* provided className for react-icons for sizing using bulma and set vertical alignment */}
                <IconContext.Provider value={{ className: "is-size-6", style: { verticalAlign: "middle" } }}>
                  {iconSelector(item)}
                </IconContext.Provider>
              </span>
              {item}
            </div>
          </Link>
        </li>
      ))}
    </>
  )
}

export default NavLinks
