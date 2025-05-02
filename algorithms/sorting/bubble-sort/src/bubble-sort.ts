/**
 * Sorts the array in ascending order
 * @param {number[]} nums - Array of integers
 * @returns {void}
 * @time O(n^2)
 * @space O(1)
 */
function bubbleSort(nums: number[]): void {
  for (let i = 0; i < nums.length - 1; i++) {
    let isSorted = true;
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        isSorted = false;
      }
    }
    if (isSorted) return;
  }
}

export default bubbleSort;
