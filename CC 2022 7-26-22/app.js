// Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

const leastLarger = (a,i) => {

    const number = a[i]
    const arr = []
    for(let i = 0; i < a.length; i++){
      if(a[i] > number) arr.push(a[i])
    }
    return a.indexOf(Math.min(...arr))
  }