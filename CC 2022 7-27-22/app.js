// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

function checkThreeAndTwo(array) {
    let item1, item2, item3
    for( let i = 0; i < array.lengthl i++){
      if(array[i] == 'a'){
        item1++;
      }else if(array[i] == 'b'){
        item2++;
      }else if(array[i] == 'c'){
        item3++;
      }
      
    }
    return (item1 == 2 || item2 == 2 || item3 == 2) && (item1 == 3 || item2 == 3 || item 3 == 3)
  }
  
  