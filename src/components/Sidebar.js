// sidebar component for mobile/touch devices, set as first child of main parent container
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { useNavContext } from './NavLinks';
import './Sidebar.css';

function Sidebar() {
  // NavLinks component provided as context by NavLinks.js
  const NavLinks = useNavContext();

  // open/close sidebar
  const [sidebar, setSidebar] = useState(false);

  // toggle sidebar for onClick of hamburger icon
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
    <>
      {/* hamburger icon toggles overlay */}
      <button className="icon is-size-4 has-text-white-ter is-hidden-desktop" type="button">
        {sidebar ? <MdClose onClick={toggleSidebar} /> : <GiHamburgerMenu onClick={toggleSidebar} />}
      </button>
      {/* sidebar overlay menu */}
      <div className={`nav-menu is-flex is-hidden-desktop ${sidebar ? 'is-active' : ''}`}>
        <ul className="sidebar-links">
          {/* list of sidebar navlinks as <li> */}
          <NavLinks />
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
