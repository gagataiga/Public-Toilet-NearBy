import React, { useState} from 'react'
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { navLinks } from '../common/data/navLinks';
import { NavLink } from '../common/types';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggelNavBar = () => { 
    setIsOpen(!isOpen);
  }

  const closedNavBar = () => {setIsOpen(false)}

  return (
    <header className='header'>
      <div className='header__item_title'>
          <Link to="/"><h2 className='heaer__item_link' onClick={closedNavBar}>Public-Toilet-NearBy</h2></Link>
      </div>
      <nav className='header__nav_menu'>
        <div className="nav__button_container">
          <MenuIcon onClick={toggelNavBar} className='nav__button' />
        </div>
      
        <div className={`nav__items_container ${isOpen ? "open" : ""}`}>
          <ul className='nav__items'>
            {navLinks.map((link: NavLink, index: number) => {
              return (
                <li className='nav__item' key={index}><Link to={link.to} className='nav__item_link' onClick={toggelNavBar}>{link.label}</Link></li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header