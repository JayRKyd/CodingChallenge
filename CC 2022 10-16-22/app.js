// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

let FilterString = function(value) {
    //Complete this function :)
    let newStr = '';
    value=value+'';
    for(let i=0; i<value.length;i++){
      if(value[i]==0||value[i]==1||value[i]==2||value[i]==3||
         value[i]==4|| value[i]==5|| value[i]==6||value[i]==7||value[i]==8
         ||value[i]==9){
        newStr= newStr +value[i];
      }
    }
    return newStr*1;
  }