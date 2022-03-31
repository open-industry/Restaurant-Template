import React from 'react';
import { NavLink } from 'react-router-dom';
import imgSelector from '../../img/imgSelector';
import CONSTANTS from '../../data/constants';

// import nav items from constants
const { NAVITEMS } = CONSTANTS;

// helper function for link path To based on nav item
const linkPathTo = (item) => `/${item !== NAVITEMS.HOME ? item.toLowerCase() : ''}`;

// NavLInks component expects one prop location: object
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
            aria-label={item}
          >
            <div className="icon-text is-align-items-center">
              {/* compare NavLink path to current location for icon className  */}
              <span className={`icon is-size-6 ${linkPathTo(item) === location.pathname ? 'has-text-danger-dark' : 'has-text-grey-dark'}`}>
                {imgSelector(item)}
              </span>
              {item}
            </div>
          </NavLink>
        </li>
      ))}
    </>
  );
}
