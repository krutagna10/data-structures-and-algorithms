const fruits = ["Apple", "Banana", "Pear", "Pineapple", "Grapes"];

// Length => Caculate the length of the array
const fruitsLength = fruits.length;

// Replacing elements at an index
fruits[0] = "Guava";

// Looping over the array
for (let i = 0; i < fruits.length; i++) {
  // Do Something
}

for (const item of fruits) {
  // Do Something
}

// Push() => Add elements at the end of the array
fruits.push("Watermelon");

// Unshift() => Add elements at the start of the array
fruits.unshift("Orange");

// Pop() => Remove elements from the end of the array
fruits.pop();

// Shift() => Remove elements at the start of the array 
fruits.shift();

 // Splice() => Removing elements at a particular index
fruits.splice(1, 1);

// Slice() => Copy the array from index start to end in a new array
const slicedFruits = fruits.slice(0, 1);

// Concat() => Create new array with values from other array & additional items