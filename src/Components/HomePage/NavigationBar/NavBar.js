import React from 'react';
import './NavBar.css';
import Logo from './Logo/Logo';
import ProductLinks from './ProductLinks/ProductLinks';
import RightNav from './RightNav/RightNav';

function NavBar({ sideBarState, toggleSideBar }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-6 pt-4 montserrat-m">
      <Logo></Logo>
      <ProductLinks></ProductLinks>
      <RightNav
        sideBarState={sideBarState}
        toggleSideBar={toggleSideBar}
      ></RightNav>
    </nav>
  );
}

export default NavBar;
