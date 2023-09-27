import React, { useState} from 'react'
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggelNavBar = () => { 
    setIsOpen(!isOpen);
  }

  return (
    <header className='header'>
      <div className='header__item_title'>
          <Link to="/"><h2 className='heaer__item_link'>Near-Me-Toilet</h2></Link>
      </div>
      <nav className='header__nav_menu'>
        <div className="nav__button_container">
          <MenuIcon onClick={toggelNavBar} className='nav__button' />
        </div>
      
        <div className={`nav__items_container ${isOpen ? "open" : ""}`}>
          <ul className='nav__items'>
          <li className='nav__item'><Link to="/" className='nav__item_link'>Home</Link></li>
            <li className='nav__item'><Link to="/about" className='nav__item_link'>About</Link></li>
            <li className='nav__item'><Link to="/auth" className='nav__item_link'>Login</Link></li>
            <li className='nav__item'><Link to="/setting" className='nav__item_link'>Setting</Link></li>
            <li className='nav__item'><Link to="/posts" className='nav__item_link'>Posts</Link> </li>
            <li className='nav__item'><Link to="/logout" className='nav__item_link'>Logout</Link> </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header