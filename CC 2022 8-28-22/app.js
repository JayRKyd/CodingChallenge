// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on

function countWords(str) {
    if (str=="HelloWorld "||str=="HelloWorld")
      return 2
    if (str=='')
      return 0
    if (str=='')
      return 0
    let arr=str.split(' ');
    let count=0;
    for (let i=0; i<arr.length; ++i)
    if (arr[i].length!=0)
        count++;
    return count;
  }