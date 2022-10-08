// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise
// Examples:
function containAllRots(string, arr) {
    if (string === '') return true;
  
    const rotations = [];
    let wordSplit = string.split('');
    
    for (let i = 0; i < string.length; i++) {
      const lastChart = wordSplit.pop();
      wordSplit.unshift(lastChart);
      
      rotations.push(wordSplit.join(''))
    }
  
    return rotations.map(rot => arr.some(elem => elem === rot))
      .every(item => item === true);
  }