import React, { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { IconContext } from 'react-icons';
import { FaUtensils, FaPhoneAlt } from 'react-icons/fa';
import { IoHomeSharp } from 'react-icons/io5';

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

// helper function for link path To based on nav item
// added /restaurant-template to path to support gh-pages
const linkPathTo = (item) => `/restaurant-template/${item !== navItems[0] ? item.toLowerCase() : ''}`;

const NavContext = createContext();

// custom hook that returns NavContext for use by components that
// provides NavLinks component to children
export function useNavContext() {
  return useContext(NavContext);
}


export const NavProvider = ({ children }) => {
  // gets current location from react router
  // used to set active nav item className with ternary operator
  const location = useLocation();


  function NavLinks() {
    return (
      <>
        {navItems.map((item) => (
          <li
            key={item}
            // compare NavLink path to current location for <li> className
            className={linkPathTo(item) === location.pathname ? "is-active" : ""}
          >
            <NavLink
              // callback function of NavLink component checks isActive prop and adds className
              className={({ isActive }) => isActive ? "active-font" : "has-text-warning-dark"}
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
    )
  }

  return (
    <NavContext.Provider value={NavLinks}>
      {children}
    </NavContext.Provider>
  )
}
