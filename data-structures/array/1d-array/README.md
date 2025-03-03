# Array

Array hold values of the same type at contiguous memory locations. In an array, we're usualy concerned about two things - the position / index of an element and the element itself.

## Advantages

- Store multiple elements of same type with one single variable name
- Accessing elements in done in `O(1)` time as we have the index, as opposed to linked lists, where we traverse from the head.

## Disadvantages

- Addition and removal of elements into/from middle or start is slow, as remaining elements needs to be shifted. An exception to this is if the position to be inserted is at the end of the array.
- For certain languages, where the array size is fixed, it cannot alter its size after initialization.

## Common Terms

### Subarray

A range of contigous values within an array

Example: Given an array `[2, 3, 6, 1, 5, 4]`, `[3, 6, 1]` is a subarray while `[3, 1, 5]` is not a subarray.

### Subsequence

A sequence that can be derived from given sequence by deleting some or no elements without changing the order of remaining elements

Example: Given an array `[2, 3, 6, 1, 5, 4]`, `[3, 1, 5]` is a subsequence, but `[3, 5, 1]` is not a subsequence.

## Time Complexity

| Operation     | Time Complexity |
| ------------- | --------------- |
| access        | O(1)            |
| push          | O(1)            |
| unshift       | O(n)            |
| pop           | O(1)            |
| shift         | O(n)            |
| splice        | O(n)            |
| slice         | O(n)            |
| concat        | O(n)            |
| flat          | O(n)            |
| flatMap       | O(n)            |
| indexOf       | O(n)            |
| lastIndexOf   | O(n)            |
| includes      | O(n)            |
| find          | O(n)            |
| findIndex     | O(n)            |
| findLastIndex | O(n)            |
| some          | O(n)            |
| every         | O(n)            |
| filter        | O(n)            |
| map           | O(n)            |
| reduce        | O(n)            |
| sort          | O(nlogn)        |
| reverse       | O(n)            |
| join          | O(n)            |
| split         | O(n)            |
| fill          | O(n)            |
| Array.isArray | O(1)            |

## Corner Cases

- Empty sequence
- Sequence with 1 or 2 elements
- Sequence with repeated elements

## Techniques

- Two Pointers: A technique where two pointers traverse an array, can cross each other and can be on different arrays.

- Sliding window: In sliding window, the two pointers usually move in the same direction and will never overtake each other.

- Traversing from the right: Sometimes, we can traverse array from the right instead of conventional approach of from the left.

- Sorting the array: If the array is sorted, then some form of binary search should be possible. This means that the solution will be `O(logn)`, which will be fasted than `O(n)`. Sometimes sorting the array can significantly simplify the problem, but it would take `O(nlogn)`, and the order of array elements will not be preserved

- Precomputation: For questions where summation or multiplication of a subarray is involved, pre-computation using hashing or a preffix/suffix sum/product might be useful.

- Index as a hash key: If we are given a sequence, and the interviewer asks for `O(1)` space, it might be possible to use array itself as a hash talbe. For example, if array only has values from 1 to n, wher n is the length of the array, negate the values at that index to indicate the presence of that number.

- Traversing array more than once: Traversing the array twice/thrice is still `O(n)`, sometimes traversing the array more than once can help you solve the problem while keeping the time complexity to `O(n)`.
