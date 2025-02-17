// Intialiazing an 3x3 array & filling it with zeroes 
const arr1 = new Array(3).fill(0).map(() => new Array(3).fill(0));

// Initializing an 3x3 array with predefined values
const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Iterating through each row of 2d array
for (let row = 0; row < arr2.length; row++) {
  for (let col = 0; col < arr2[row].length; col++) {
    const currElement = arr2[row][col];
  }
}

// Iterating through each column of 2d array
for (let col = 0; col < arr2[0].length; col++) {
  for (let row = 0; row < arr2.length; row++) {
    const currElement = arr2[row][col];
  }
}

