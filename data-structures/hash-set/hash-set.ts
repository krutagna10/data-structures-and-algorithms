// Initializing a set
const emptySet = new Set<string>();
const fruits = new Set([ "oranges", "apples", "banana"]);

// Iterating over the set
for (const num of fruits) {
  // Do Something
}

fruits.forEach((num) => {
  // Do Something
})
// add() => adds a value to the set, & returns the set itself
fruits.add("guava");

// delete() => removes the value, returns true if value existed, otherwise false
fruits.delete("apples");

// has() => returns true if value exists, otherwise false
const containsBanana = fruits.has("banana");

// size => returns the elements count
const setSize = fruits.size;

// clear() => removes everything from the set
fruits.clear();

// keys() => returns an iterable object for values
const keys = fruits.keys();

// values() => returns an iterable object for values, same as set.keys()
const values = fruits.keys();

// entries() => retruns an iterable object for entries[value, value]
const entries = fruits.entries();





