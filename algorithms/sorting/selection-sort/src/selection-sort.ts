/**
 * Sorts the array in ascending order
 * @param {number[]} nums - Array of integers
 * @returns {void}
 * @time O(n^2)
 * @space O(1)
 */
function selectionSort(nums: number[]): void {
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
}

export default selectionSort;
