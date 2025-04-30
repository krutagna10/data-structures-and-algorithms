/**
 * Searches for `target` in the array
 * @param {number[]} nums - Sorted array of integers
 * @param {number} target - The target number
 * @returns {number} - The index of target element if it is present, -1 otherwise
 */
function binarySearch(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
  return -1;
}

export default binarySearch;
