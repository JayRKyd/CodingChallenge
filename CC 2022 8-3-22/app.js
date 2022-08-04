// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
function mergeArrays(a, b) {
    let res = [];
    let i=0; 
    while ((i<a.length) || (i<b.length) ) {
      if (i<a.length) res.push(a[i]); 
      if (i<b.length) res.push(b[i]); 
      i++;
    }
    return res;
  }