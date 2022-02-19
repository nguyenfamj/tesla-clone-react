// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import './RightNav.css';

function RightNav({ sideBarState, toggleSideBar }) {
  return (
    <div className="flex navbar_right font-14">
      <a className="pr-3" href="https://shop.tesla.com">
        Shop
      </a>
      <Link className="px-3" to="/login">
        Account
      </Link>
      <div
        className="px-3 cursor-pointer"
        onClick={() => {
          sideBarState || toggleSideBar();
        }}
      >
        Menu
      </div>
    </div>
  );
}

export default RightNav;
