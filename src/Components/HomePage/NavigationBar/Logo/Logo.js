// Imports
import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

// Logo Component
function Logo() {
  return (
    <div className="mr-14 navbar_logo">
      <Link to="/">
        <img
          className="flex-1 object-contain w-24 ml-5 mr-0"
          src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Logo;
