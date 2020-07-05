import React from "react"
import RatingStars from 'react-star-ratings'

import { rhythm } from "../utils/typography"

const Rating = ({ stars, comment }) => {
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <center> <p>
        Essa comida teve nota com relação a custo beneficio e toda a experiencia foi<br />
        <RatingStars rating={stars} starRatedColor="rgb(255, 223, 0)" />
        <br /><strong>
          {comment ? `"${comment}"` : null}
        </strong>
      </p></center>
    </div>
  )
}

export default Rating
