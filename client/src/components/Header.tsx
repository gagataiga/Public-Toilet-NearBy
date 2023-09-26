import React from 'react'
import "./Header.css";
function Header() {
  return (
    <header className='header'>
      <div className='header__item_title'>
          <h2>Near-Me-Toilet</h2>
      </div>
      <nav className='header__item_nav'>
        <ul className='nav__items'>
          <li>About</li>
          <li>Sign in / Sign up</li>
          <li>Settings</li>
          <li>Log out</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header