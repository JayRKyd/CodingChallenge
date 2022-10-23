// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let newStr = str.split(' ')
   for(let i = 0; i < newStr.length; i++){
     newStr[i] = newStr[i].split('')
            newStr[i].reverse('')
           newStr[i] = newStr[i].join('')
     
   }
    newStr = newStr.join(' ')
    return newStr
  }