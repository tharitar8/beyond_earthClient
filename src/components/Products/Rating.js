import React from 'react'

function Rating ({ value, text, color }) {
  return (
    <div className="rating">
      <span>
        <i style={{ color }} className={
          value >= 1
            ? 'fas fa-star'
            : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
        }>

        </i>
      </span>

      <span>
        <i style={{ color }} className={
          value >= 2
            ? 'fas fa-star'
            : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
        }>

        </i>
      </span>

      <span>
        <i style={{ color }} className={
          value >= 3
            ? 'fas fa-star'
            : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
        }>

        </i>
      </span>

      <span>
        <i style={{ color }} className={
          value >= 4
            ? 'fas fa-star'
            : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
        }>

        </i>
      </span>

      <span>
        <i style={{ color }} className={
          value >= 5
            ? 'fas fa-star'
            : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
        }>

        </i>
      </span>

      <span>{text && text}</span>
    </div>
  )
}

export default Rating

// function Rating({ value, color, text, totalStars=5}) {
//   const stars = [];
//   for (let countStar = 0; countStar !== totalStars; countStar++) {
//     stars.push(
//       <i
//         key={countStar}
//         style={‌{ color }}
//         className={
//           value = countStar > 0.5
//             ? "fas fa-star"
//             : value = countStar === 0.5
//             ? "fas fa-star-half-alt"
//             : "far fa-star"
//         }
//       ></i>
//     )
//   }

//   return (
//     <div className="rating">
//       <span>{stars} </span>
//       <span>{text && text}</span>
//     </div>
//   )
// }
