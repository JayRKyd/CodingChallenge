// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"
function position(alphabet){
    let letters = [" ", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let placed = letters.indexOf(alphabet)
    return "Position of alphabet:" + " " + placed;
    
  }