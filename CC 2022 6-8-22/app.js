// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){
    const strings = x.filter(n => typeof n === 'string')
    const numbers = x.filter(n => typeof n === 'number')
    
    const strSum = strings.reduce((acc, str) => acc += +str, 0)
    const numSum = numbers.reduce((acc, str) => acc += str, 0)
  
    return numSum - strSum
  }