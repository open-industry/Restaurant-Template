// sidebar component for mobile/touch devices, set as first child of main parent container
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import NavLinks from './NavLinks';
import './Sidebar.css';

// Sidebar component for mobile/touch devices expects two props
// onClick: function and sidebar: boolean
function Sidebar({ onClick, sidebar }) {
  // ref of sidebar nav container for enabling/disabling keyboard navigation
  const navMenuRef = useRef();

  // useLocation hook from react-router-dom used to get current path name
  const location = useLocation();

  useEffect(() => {
    // get all anchor tags from navMenuRef container
    const anchorTags = navMenuRef.current.querySelectorAll('a');

    // if sidebar is active
    if (sidebar) {
      Array.from(anchorTags).forEach((anchorTag) => {
        // set tab index to 0 for all links for keyboard navigation
        anchorTag.setAttribute('tabindex', 0);
      });
      // else if inactive
    } else {
      Array.from(anchorTags).forEach((anchorTag) => {
        // set tab index to -1 for all links to prevent keyboard navigation while inactive
        anchorTag.setAttribute('tabindex', -1);
      });
    }
  }, [sidebar]);

  return (
    <>
      {/* hamburger icon toggles overlay */}
      <button className="icon is-size-4 has-text-white-ter is-hidden-desktop is-clickable" type="button" onClick={onClick} aria-label={sidebar ? 'close sidebar' : 'open sidebar'}>
        {sidebar ? <i><MdClose /></i> : <i><GiHamburgerMenu /></i>}
      </button>
      {/* sidebar overlay menu */}
      <div className={`nav-menu is-flex is-hidden-desktop ${sidebar ? 'is-active' : ''}`} ref={navMenuRef}>
        <ul className="sidebar-links" tabIndex={-1}>
          {/* list of sidebar navlinks as <li> */}
          <NavLinks location={location} />
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
