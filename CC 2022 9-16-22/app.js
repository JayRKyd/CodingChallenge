// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:
const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");