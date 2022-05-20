// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

function minValue(values){
    let newVal = [...new Set(values)]
    let newArr = newVal.sort()
    let secondMethod = String(newArr)
    return Number(secondMethod.split(',').join(''))
  }