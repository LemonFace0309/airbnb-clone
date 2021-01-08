import React, { useState } from 'react'
import Button from '@material-ui/core/Button'

import classes from './Banner.module.css'
import Search from './Search/Search'

function Banner() {
  const [showSearch, setShowSearch] = useState(false)

  const changeSearchHandler = () => {
    setShowSearch(!showSearch)
  }

  return (
    <div className={classes.banner}>
      <div className={classes.banner__search}>
        {showSearch && <Search />}
        <Button
          onClick={changeSearchHandler}
          variant="outlined"
          className={classes.banner__searchButton}
        >
          Search Dates
        </Button>
      </div>
      <div className={classes.banner__info}>
        <h1>Get out and stretch you imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  )
}

export default Banner
