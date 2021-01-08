import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import classes from './Banner.module.css'
import Search from './Search/Search'

function Banner() {
  const [showSearch, setShowSearch] = useState(false)

  const history = useHistory()

  const changeSearchHandler = () => {
    setShowSearch(!showSearch)
  }

  const buttonText = showSearch ? "Hide" : "Search Dates"

  return (
    <div className={classes.banner}>
      <div className={classes.banner__search}>
        {showSearch && <Search />}
        <Button
          onClick={changeSearchHandler}
          variant="outlined"
          className={classes.banner__searchButton}
        >
          {buttonText}
        </Button>
      </div>
      <div className={classes.banner__info}>
        <h1>Get out and stretch you imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push('/search')} variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  )
}

export default Banner
