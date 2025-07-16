import { Link } from 'react-router-dom';
import logo from '../Images/logo-sm.jpg';
import { useState } from 'react';

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href='/' className='logo'>
                <img src={logo} alt='logo' />
            </a>
        
        <div className='menu-icon' onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>

        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/booking">Reserve A Table</Link></li>
          <li><Link to="/">Order Online</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
      </nav>
  );
}

export default Nav;