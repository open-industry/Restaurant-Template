import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import NavLinks from './NavLinks';
import './Sidebar.css';

function  Sidebar() {
  const [sidebar, setSidebar] = useState(() => false);

  const toggleSidebar = () => {
    setSidebar(prevState => !prevState);
  };

  return (
    <>
      {/* closed sidebar */}
      <Link to="#" className="menu-bars mobile">
        {sidebar ? <AiOutlineClose onClick={toggleSidebar}/> : <GiHamburgerMenu onClick={toggleSidebar}/>}
      </Link>
      <div className={`is-flex nav-menu ${sidebar ? 'is-active' : ''}`}>
        <ul className="sidebar-items">          
          <NavLinks />
        </ul>
      </div>
    </>
  )
}

export default Sidebar 
