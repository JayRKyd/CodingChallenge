// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    //take any positive integer and make it reverse
    // return it in descending order
    //51 = 15
  let newN = n.toString().split('').sort(function (a, b) { return b - a; }).join('');
  return Number(newN)
  }