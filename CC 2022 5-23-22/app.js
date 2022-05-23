// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)

function rowWeights(array){
    let team1 = 0;
    let team2 = 0;
    
    array.forEach(function(element,index){
      if(index % 2 === 0){
        team1 += element;
        
      }else {
        team2 += element;
      }
    })
    return [team1,team2]
  }
  
  rowWeights([13, 27, 49])  