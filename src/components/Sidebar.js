// sidebar component for mobile/touch devices, set as first child of main parent container
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import NavLinks from './NavLinks';
import './Sidebar.css';

function  Sidebar() {
  // open/close sidebar
  const [sidebar, setSidebar] = useState(false);

  // toggle sidebar for onClick of hamburger icon
  const toggleSidebar = () => {
    setSidebar(prevState => !prevState);
  };

  return (
    <>
      {/* hamburger icon toggles overlay */}
      <Link to="#" className="is-hidden-desktop">
        <span className="icon has-text-white-ter">
          <IconContext.Provider value={{ className: 'is-size-4' }}>
            {sidebar ? <MdClose onClick={toggleSidebar}/> : <GiHamburgerMenu onClick={toggleSidebar}/>}
          </IconContext.Provider>
        </span>
      </Link>
      {/* sidebar overlay menu */}
      <div className={`nav-menu is-flex is-hidden-desktop ${sidebar ? 'is-active' : ''}`}>
        <ul className="sidebar-links">
          {/* list of sidebar navlinks as <li> */}
          <NavLinks />
        </ul>
      </div>
    </>
  )
}

export default Sidebar 
