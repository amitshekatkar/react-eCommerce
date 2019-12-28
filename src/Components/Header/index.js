import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/Logo.svg'
import { auth } from '../../firebase/firebase.utils'

import './Header.scss'

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"/>
      </Link>    
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {
          currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGNOUT</div>
          :
          <Link to="/signin" className="option">SIGNIN</Link>
        }
      </div> 
    </div>
  )
}

export default Header;
