const fruits = ["Apple", "Banana", "Pear", "Pineapple", "Grapes"];
let users = [
  { id: 1, name: "John", age: 21 },
  { id: 2, name: "Pete", age: 25 },
  { id: 3, name: "Mary", age: 27 },
];
const numbers = [3, 4, 9, 1, 2];

// length => calculate the length of the array
const fruitsLength = fruits.length;

// replacing elements at an index
fruits[0] = "Guava";

// looping over the array
for (let i = 0; i < fruits.length; i++) {
  // do something
}

for (const item of fruits) {
  // do something
}

fruits.forEach((fruit, index) => {
  // do something
});

// push() => add elements at the end of the array
fruits.push("Watermelon");

// unshift() => add elements at the start of the array
fruits.unshift("Orange");

// pop() => remove elements from the end of the array
fruits.pop();

// shift() => remove elements at the start of the array
fruits.shift();

// splice() => removing elements at a particular index
fruits.splice(1, 1);

// slice() => copy the array from index start to end in a new array
const slicedFruits = fruits.slice(0, 1);

// concat() => create a new array that includes values from other arrays & new items
const concatenatedFruits = fruits.concat(["Cherry", "Litchi"], "Strawberry");

// indexOf() => returns the first index where element was found, otherwise -1
const waterMelonIndex = fruits.indexOf("Watermelon");

// lastIndexOf() => returns the last index where element was found, otherwise -1
const guavaIndex = fruits.lastIndexOf("Guava");

// includes() => returns true if element is in array, otherwise false
const hasApple = fruits.includes("Apple");

// find() =>returns element if it is found, otherwise undefined
const john = users.find((user) => user.name === "John");

// findIndex() => returns the first index where the element was found, otherwise -1
const maryIndex = users.findIndex((user) => user.name === "Mary");

// findLastIndex() => returns the last index where the element was found, otherwise -1
const peteIndex = users.findIndex((user) => user.name === "Pete");

// some() => returns true if any element satisfies the condition, otherwise false
const someAgeGreater = users.some((user) => user.age > 25);

// every() => returns true if every element satisfies the condition, otherwise false
const allAgeGreater = users.every((user) => user.age > 25);

// filter() => returns the array of all matching elements
const filteredUsers = users.filter((user) => user.id < 3);

// map() => returns the transformed array
const usersName = users.map((user) => user.name);

// reduce() => returns a single value based of some operatons
const totalAge = users.reduce((acc, user) => acc + user.age , 0);

// sort() => sorts the array, changing the element order
numbers.sort((a, b) => a - b);
numbers.sort((a, b) => b - a);

// reverse() => reverse the order of elements in array
numbers.reverse();

// join() => returns a sting by joining the elements 
const joinedFruits = fruits.join(", ");

// split() => returns the array formed by splitting the strings
const splittedFruits = joinedFruits.split(", ");

// fill() => returns the array filled with give value
const filledArray = new Array(3).fill(0);

// Array.isArray() => returns true if value is an array, otherwise false
const isArray = Array.isArray(fruits);


