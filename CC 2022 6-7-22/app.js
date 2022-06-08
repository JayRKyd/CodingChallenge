// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}

function count(array){
    var elements = {};
    
    array.forEach(function(currentEl){
    //If the element is new, create a property for it
      if(elements.hasOwnProperty(currentEl) === false){
        elements[currentEl] = 1;
      } else {
      //If the element is not new, increment its count value
        elements[currentEl] += 1;
      }
    });
    return elements;
  }