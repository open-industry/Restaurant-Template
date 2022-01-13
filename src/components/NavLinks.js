import React from 'react';
import { NavLink } from 'react-router-dom';
// import { IconContext } from 'react-icons';
import { FaUtensils, FaPhoneAlt } from 'react-icons/fa';
import { IoHomeSharp } from 'react-icons/io5';

const NAVITEMS = {
  HOME: 'Home',
  MENU: 'Menu',
  CONTACT: 'Contact',
};

// helper function for font awesome icon className slection based on nav item
const iconSelector = (nav) => {
  switch (nav) {
    case NAVITEMS.HOME:
      return <IoHomeSharp />;
    case NAVITEMS.MENU:
      return <FaUtensils />;
    case NAVITEMS.CONTACT:
      return <FaPhoneAlt />;
    default:
      return <IoHomeSharp />;
  }
};

// helper function for link path To based on nav item
const linkPathTo = (item) => `/${item !== NAVITEMS.HOME ? item.toLowerCase() : ''}`;

export default function NavLinks({ location }) {
  return (
    <>
      {Object.values(NAVITEMS).map((item) => (
        <li
          key={item}
          // compare NavLink path to current location for <li> className
          className={linkPathTo(item) === location.pathname ? 'is-active' : ''}
        >
          <NavLink
            // callback function of NavLink component checks isActive prop and adds className
            className={({ isActive }) => (isActive ? 'active-font' : 'has-text-warning-dark')}
            to={linkPathTo(item)}
          >
            <div className="icon-text is-align-items-center">
              {/* compare NavLink path to current location for icon className  */}
              <span className={`icon is-size-6 ${linkPathTo(item) === location.pathname ? 'has-text-danger-dark' : 'has-text-grey-dark'}`}>
                {iconSelector(item)}
              </span>
              {item}
            </div>
          </NavLink>
        </li>
      ))}
    </>
  );
}
