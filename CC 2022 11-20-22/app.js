// There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

// In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

// Let's see:

// For Javascript
// nextPal(11) == 22

// nextPal(188) == 191

// nextPal(191) == 202

// nextPal(2541) == 2552
function nextPal(val) {

    let str = `${val}`
    ,   len = Math.ceil(str.length / 2)
    
    ,   abc = str.slice(0, len)
    ,   xyz = str.slice(-len)
    
    ,   cba = [ ...abc ].reverse().join('')
  
    if (+xyz >= +cba)
      abc = `${+abc + 1}`;
      
    xyz = [...abc]
      .reverse()
      // ignore the middle char for odd lengths + handle edge case 999 -> 1001
      .slice(str.length % 2 + abc.length - xyz.length)
      .join('')
    
    return +(abc + xyz);
      
  }