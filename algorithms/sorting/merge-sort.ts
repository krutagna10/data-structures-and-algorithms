/**
 * Sorts the array in ascending order
 * @param {number[]} nums - Array of integers
 * @returns - The sorted array in ascending order
 */

function mergeSort(nums: number[]): number[] {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const leftNums = mergeSort(nums.slice(0, mid));
  const rightNums = mergeSort(nums.slice(mid, nums.length));
  return merge(leftNums, rightNums);
}

function merge(nums1: number[], nums2: number[]): number[] {
  const mergedNums = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    mergedNums.push(nums1[i] < nums2[j] ? nums1[i++] : nums2[j++]);
  }
  while (i < nums1.length) {
    mergedNums.push(nums1[i++]);
  }
  while (j < nums2.length) {
    mergedNums.push(nums2[j++]);
  }
  return mergedNums;
}

export default mergeSort;
