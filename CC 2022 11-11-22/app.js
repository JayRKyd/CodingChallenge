// In democracy we have a lot of elections. For example, we have to vote for a class representative in school, for a new parliament or a new government.

// Usually, we vote for a candidate, i.e. a set of eligible candidates is given. This is done by casting a ballot into a ballot-box. After that, it must be counted how many ballots (= votes) a candidate got.

// A candidate will win this election if he has the absolute majority.

// Your Task
// Return the name of the winner. If there is no winner, return null (in Java and JavaScript), None (in Python), nil (in Ruby), or * in C.
// Task Description
// There are no given candidates. An elector can vote for anyone. Each ballot contains only one name and represents one vote for this name. A name is an arbitrary string, e.g. "A", "B", or "XJDHD".

// There are no spoiled ballots.

// The ballot-box is represented by an unsorted list of names. Each entry in the list corresponds to one vote for this name. You do not know the names in advance (because there are no candidates).

// A name wins the election if it gets more than n/2 votes (n = number of all votes, i.e. n is equal to the size of the given list).


function getWinner(list) {
    let arr = [], winNum = list.length/2;
    list.forEach(function(val){ ++arr[val] || (arr[val]=1) });
    for(let name in arr) if(arr[name] > winNum) return name;
    return null;
  }