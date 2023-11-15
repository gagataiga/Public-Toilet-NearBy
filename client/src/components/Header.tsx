import React, { useState} from 'react'
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { navLinks } from '../common/data/navLinks';
import { NavLink } from '../common/types';
import { Box, Button, Modal } from '@mui/material';
import { userSignOut } from '../redux/authSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userState = useAppSelector(state => state.user);

  const toggleNavBar = () => { 
    setIsOpen(!isOpen);
  }

  const [openLogout, setOpenLogout] = useState<boolean>(false); 

  const closedNavBar = () => {setIsOpen(false)}

  const toggleLogoutModal = () => {
    setOpenLogout(!openLogout);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleLogout = async() => { 
    const isLogout = await dispatch(userSignOut());
    if (isLogout) {
      setOpenLogout(!openLogout);
      setIsOpen(false);
      alert("Logged out successfully");
      navigate("/home");
    }
  }


  return (
    <header className='header'>
      <div className='header__item_title'>
          <Link to="/"><h1 className='header__item_link' onClick={closedNavBar}>Public-Toilet-NearBy</h1></Link>
      </div>
      <nav className='header__nav_menu'>
        <div className="nav__button_container">
          <MenuIcon onClick={toggleNavBar} className='nav__button' />
        </div>
        <div className={`nav__items_container ${(isOpen && !openLogout) ? "open" : ""}`}>
          <ul className='nav__items'>
            {navLinks.map((link: NavLink, index: number) => {
              return (
                <li className='nav__item' key={index}><Link to={link.to} className='nav__item_link' onClick={toggleNavBar}>{link.label}</Link></li>
              )
            })}
            {userState.isLoggedIn && (
              <button type="button" className='nav__item_link nav__item-btn' onClick={toggleLogoutModal}>Logout</button>
            )}
            <Modal open={openLogout} onClose={toggleLogoutModal}>
              <Box className="logout-modal-box">
                <p className='logout-msg'>
                Would you like to logout?
                </p>
                <div className='logout-btn__container'>
                <Button className='logout__btn' onClick={handleLogout}>
                  Logout
                </Button>
                <Button className='logout__btn cancel-btn' onClick={toggleLogoutModal}>
                  Cancel
                </Button>
                </div>
              </Box>
            </Modal>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header