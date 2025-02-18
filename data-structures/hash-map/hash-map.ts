// Intializaton
const emptyMap = new Map<string, string>();
const user = new Map<string, string>([
  ["name", "Krutagna"],
  ["gender", "male"],
]);

// Iterating over map
for (const key of user.keys()) {
  // Do Something
}

for (const value of user.values()) {
  // Do Something
}

for (const [key, value] of user) {
  // Do Something
}

user.forEach((value, key) => {
  // Do Something
})

// set() => stores the value by key
user.set("city", "Vapi");

// get() => returns the value by the key, undefined if keys doesn't exist in map
const name = user.get("name");

// has() => returns true if key exists, otherwise false
const hasCity = user.has("city") ;

// delete() => removes the value by the key
user.delete("gender");

// size() => returns the current element count
console.log(user.size);

// clear() => removes everything from the map
user.clear();

// keys() => returns an iterable object for keys
const keys = user.keys();

// values() => returns an iterable object for values
const values = user.keys();

// entries() => retruns an iterable object for entries[key, value]
const entries = user.entries();