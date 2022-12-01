// Task
// Given crowd, an array of strings of equal length, representing a crowded place, return an array with two integers representing the coordinates [y, x] where Waldo can be found ([0, 0] is top-left, y being the row and x being the column ).

// Examples

function findWaldo(crowd) {
    let count = new Map();
    for (let y = 0; y < crowd.length; y++) {
      for (let x = 0; x < crowd[y].length; x++) {
        count.set(crowd[y][x], (count.get(crowd[y][x]) || 0) + 1)
      }
    }
    for (let y = 0; y < crowd.length; y++) {
      for (let x = 0; x < crowd[y].length; x++) {
        if (count.get(crowd[y][x]) == 1) {
          return [y, x];
        }
      }
    }
  }