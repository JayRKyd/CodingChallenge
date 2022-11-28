// Task
// Find the minimum number of jumps to go from start to finish

// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)
function solution(start, finish) 
{
  let stepsToClimb = finish-start

  let numBigJumps = Math.floor(stepsToClimb/3)

  let numSmallJumps = stepsToClimb % 3

  return numBigJumps + numSmallJumps
}