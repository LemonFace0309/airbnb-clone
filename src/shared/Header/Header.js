import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'

import classes from './Header.module.css'

function Header() {
  return (
    <div className={classes.header}>
      <Link to='/'>
      <img
        className={classes.header__icon}
        src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png"
        alt=""
      />
      </Link>

      <div className={classes.header__center}>
        <input type="text"/>
        <SearchIcon />
      </div>
      <div className={classes.header__right}>
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  )
}

export default Header
