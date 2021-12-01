import React, { useState, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
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

const NavContext = createContext();

// custom hook that returns NavContext for use by components that
// use NavLinks component as child
export function useNavContext() {
  return useContext(NavContext);
}


export const NavProvider = ({ children }) => {
  // state for navbar Links, must be exposed outside of NavLinks component
  // if state is scoped within NavLinks component each component that
  // uses NavLinks as a child creates a separate instance of the state
  const [activeNav, setActiveNav] = useState(() => navItems[0]);

  // onClick handler for Link component to update activeNav state
  const handleNavClick = (nav) => {
    setActiveNav(pevNav => nav);
  }

  function NavLinks() {
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

  return (
    <NavContext.Provider value={NavLinks}>
      {children}
    </NavContext.Provider>
  )
}
