import React, { useState } from 'react'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import Button from '@material-ui/core/Button'
import PeopleIcon from '@material-ui/icons/People'

import classes from './Search.module.css'

function Search() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection', // required
  }

  const selectDateHandler = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <div className={classes.search}>
      <DateRangePicker ranges={[selectionRange]} onChange={selectDateHandler} />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button>Search Airbnb</Button>
    </div>
  )
}

export default Search
