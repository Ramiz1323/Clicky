import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/Navbar.scss';

const Navbar = () => {

  return (
    <nav className="navbar-glass">
      <Link to="/" className="nav-brand">
        Clickly
      </Link>
      
    </nav>
  );
};

export default Navbar;