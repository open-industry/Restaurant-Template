// sidebar component for mobile/touch devices, set as first child of main parent container
import React from 'react';
import { useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import NavLinks from './NavLinks';
import './Sidebar.css';

function Sidebar({ onClick, sidebar }) {
  const location = useLocation();

  return (
    <>
      {/* hamburger icon toggles overlay */}
      <button className="icon is-size-4 has-text-white-ter is-hidden-desktop" type="button">
        {sidebar ? <MdClose onClick={onClick} /> : <GiHamburgerMenu onClick={onClick} />}
      </button>
      {/* sidebar overlay menu */}
      <div className={`nav-menu is-flex is-hidden-desktop ${sidebar ? 'is-active' : ''}`}>
        <ul className="sidebar-links">
          {/* list of sidebar navlinks as <li> */}
          <NavLinks location={location} />
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
