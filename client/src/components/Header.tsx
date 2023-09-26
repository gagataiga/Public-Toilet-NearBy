import React, { useRef , useState} from 'react'
import "./Header.css";

function Header() {
  const navRef = useRef();
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
          <button className='nav__button' onClick={toggelNavBar}>MENU</button>
        </div>
      
        <div className={`nav__items_container ${isOpen ? "open" : ""}`}>
          <ul className='nav__items'>
            <li className='nav__item'><a href="#">About</a></li>
            <li className='nav__item'><a href="#">Login</a></li>
            <li className='nav__item'><a href="#">Setting</a></li>
            <li className='nav__item'><a href="#">Posts</a> </li>
            <li className='nav__item'><a href="#">Logout</a> </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header