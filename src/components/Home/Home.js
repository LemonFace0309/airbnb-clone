import React from 'react'

import classes from './Home.module.css'
import Banner from './Banner/Banner'

function Home() {
  return (
    <div className={classes.home}>
      <Banner />
    </div>
  )
}

export default Home
