// Given an integer n and two other values, build an array of size n filled with these two values alternating.

function alternate(n, firstValue, secondValue){
    let newArray = [];
    for(let i = 0; i < n; i++){
      if(i%2 === 0){
        let firstArray = newArray.push(firstValue)
      }else{
        let secondArray = newArray.push(secondValue);
      }
    }
    return newArray;
  }
  
  alternate(20, 'blue', 'red')