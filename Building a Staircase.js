
/*
Create a function that builds a staircase given the height and the type of building block.

Examples
buildStaircase(3, "#") ➞ [
  ["#", "_", "_"],
  ["#", "#", "_"],
  ["#", "#", "#"]
]

buildStaircase(4, "#") ➞ [
  ["#", "_", "_", "_"],
  ["#", "#", "_", "_"],
  ["#", "#", "#", "_"],
  ["#", "#", "#", "#"]
]

buildStaircase(3, "A") ➞ [
  ["A", "_", "_"],
  ["A", "A", "_"],
  ["A", "A", "A"]
]

// height = 3 and building block = "A"

buildStaircase(4, "$") ➞ [
  ["$", "_", "_", "_"],
  ["$", "$", "_", "_"],
  ["$", "$", "$", "_"],
  ["$", "$", "$", "$"]
]

// height = 4 and building block = "$"

*/

const buildStaircase = (length, block) =>
  Array.from({ length }, (_, y) =>
    Array.from({ length }, (_, x) => (y >= x ? block : '_'))
  );


  