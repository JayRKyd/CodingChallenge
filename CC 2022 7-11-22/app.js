// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.
function isNice(arr){
  
    if (arr === undefined || arr.length == 0) {
      return false
    }
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j] + 1 || arr[i] == arr[j] - 1) {
          break; 
        } else if (j == arr.length - 1) {
          return false
        }
      }
    }
    return true;
  }