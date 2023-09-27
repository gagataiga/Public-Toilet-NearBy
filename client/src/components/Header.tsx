import React, { useState} from 'react'
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggelNavBar = () => { 
    setIsOpen(!isOpen);
  }

  return (
    <header className='header'>
      <div className='header__item_title'>
          <h2>Near-Me-Toilet</h2>
      </div>
      <nav className='header__nav_menu'>
        <div className="nav__button_container">
          <MenuIcon onClick={toggelNavBar} className='nav__button' />
        </div>
      
        <div className={`nav__items_container ${isOpen ? "open" : ""}`}>
          <ul className='nav__items'>
            <li className='nav__item'><a className='nav__item_link' href="#">About</a></li>
            <li className='nav__item'><a className='nav__item_link' href="#">Login</a></li>
            <li className='nav__item'><a className='nav__item_link' href="#">Setting</a></li>
            <li className='nav__item'><a className='nav__item_link' href="#">Posts</a> </li>
            <li className='nav__item'><a className='nav__item_link' href="#">Logout</a> </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header