/**
 * Sorts the array in ascending order
 * @param {number[]} nums - Array of integers
 * @returns - The sorted array in ascending order
 */

function selectionSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
  return nums;
}

export default selectionSort;
