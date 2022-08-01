// Your job is to implement a function which returns the last D digits of an integer N as a list.

const lastDigit = (n, d) => {
    const nums = n.toString().split('').map( i => +i);
    if(nums.length <= d) return nums;
    if(d <= 0) return []
    return nums.slice(-d)
  }