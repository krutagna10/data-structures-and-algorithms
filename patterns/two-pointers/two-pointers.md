# Two pointers

In problems where we deal with sorted arrays (or linked lists) and need to find a set of elements that fulfill certain constraints the two pointers approach becomes quite useful. the set of problems could be a pair, a tripbet, or even a subarray.

Consider the following problem:

> Given an array of sorted numbers and a target sum, find a pair in the array, whose sum is equal to given target

To solve this problem, we can consider each element one by one (pointed out by first pointer) and iterate through the remaining elements (pointed out by second pointer) to find a pair with the given sum. the time complexity of this algorithm will be `O(n^2)`, where `n` is the number of elements in the input array.

Given that input array is sorted, an efficient way would be to start with one pointer in the beginning and another pointer at the end. at every step, we will se if the numbers pointed by the two pointers add up to the target sum. if they do not, we will do one of two things

1. If the sum of the two numbers pointed by the two pointers is greater than the target sum, this means that we need a pair with a smaller sum. so, to try more pairs, we decrement the end-pointer.
2. If the sum of the two numbers pointed by the two pointers is smaller than the target sum, this means that we need a pair with larger sum. so, to try more pairs, we increment the start-pointer.

Here is the visual representation of this algorithm:

![two pointers illustration](./assets/two-pointer-algorithm.png)

The time complexity of the above algorithm will be `O(n)`


