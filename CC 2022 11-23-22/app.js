// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 

function mostFrequentItemCount(collection) {
    if (collection.length === 0) return 0;
    
    let count = Object.create(null);
    
    collection.forEach( item => {
      count[item] = (count[item] || 0) + 1;
    });
    
    return Math.max(...Object.values(count));
  }