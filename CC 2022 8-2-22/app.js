// Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
    //create empty array variable
   let sum = 0;
   //sort 
   let sortedArray = arr.sort(function(a, b){return b-a})
  // pair and subtract
  for ( let i = 0; i < (sortedArray.length - 1); i++) {
      sum += sortedArray[i] - sortedArray[i + 1]
    } return sum 
  } 