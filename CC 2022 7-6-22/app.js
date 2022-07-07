// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)
const isAQuestion = (string) => {
    const lastChar = string.length - 1 
  
    if(string[lastChar] === '?')
      return true
    
    return false
  }
  
  const ensureQuestion = (string) => {
    if(!isAQuestion(string)){
      return string + '?'
    }
    
    return string
  }