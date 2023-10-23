import React, { useState} from 'react'
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { navLinks } from '../common/data/navLinks';
import { NavLink } from '../common/types';
import { Box, Button, Modal } from '@mui/material';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggelNavBar = () => { 
    setIsOpen(!isOpen);
  }

  const [openLogout, setOpenLogout] = useState<boolean>(false); 

  const closedNavBar = () => {setIsOpen(false)}

  const handleLogout = () => {
    console.log(openLogout);
    setOpenLogout(!openLogout);
  };

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
              <button type="button" className='nav__item_link nav__item-btn' onClick={handleLogout}>Logout</button>
            <Modal open={openLogout} onClose={handleLogout}>
              <Box className="logout-modal-box">
                <p className='logout-msg'>
                Would you like to logout?
                </p>
                <Button>

                </Button>
                <Button>
                  
                </Button>
              </Box>
            </Modal>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header