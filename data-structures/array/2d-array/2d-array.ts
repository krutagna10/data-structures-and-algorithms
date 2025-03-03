// Intialiazing a 2d array
const emptyArray = Array.from({ length: 3 }, () => new Array(3));
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Iterating through each row of 2d array
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    const currElement = matrix[row][col];
  }
}

// Iterating through each column of 2d array
for (let col = 0; col < matrix[0].length; col++) {
  for (let row = 0; row < matrix.length; row++) {
    const currElement = matrix[row][col];
  }
}
