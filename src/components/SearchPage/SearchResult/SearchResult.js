import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'

import classes from './SearchResult.module.css'

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  const [isFavorite, setIsFavorite] = useState(false)

  const selectHeartHandler = () => {
    if (isFavorite) {
      setIsFavorite(false)
    } else {
      setIsFavorite(true)
    }
  }

  return (
    <div className={classes.searchResult}>
      <img src={img} alt="" />
      {isFavorite ? (
        <FavoriteIcon
          color="secondary"
          onClick={selectHeartHandler}
          className={classes.searchResult__heart}
          selected="yes"
        />
      ) : (
        <FavoriteBorderIcon
          onClick={selectHeartHandler}
          className={classes.searchResult__heart}
          selected="no"
        />
      )}

      <div className={classes.searchResult__info}>
        <div className={classes.searchResult__infoTop}>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className={classes.searchResult__infoBottom}>
          <div className={classes.searchResult__stars}>
            <StarIcon className={classes.searchResult__star} />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className={classes.searchResults__price}>
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult
