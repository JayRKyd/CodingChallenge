// Given a two dimensional array, return the co-ordinates of x.

// If x is not inside the array, or if x appears multiple times, return [].

// The co-ordinates should be zero indexed in row-major order.
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.
const xMarksTheSpot = (input) => {
    let coords = []
  
    for (let i = 0; i < input.length; i++) {
      if (input[i].includes("x")) {
        coords.push([i, input[i].indexOf("x")])
      }
    }
    if (coords.length === 1) {
      return coords[0]
    } else {
      return []
    }
  }