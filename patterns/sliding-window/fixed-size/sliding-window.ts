/**
 * Applies a fixed size sliding window over an array
 * @param {number[]} nums - The input array
 * @param {number} k - The window size
 * @returns {void}
 */
function slidingWindow(nums: number[], k: number): void {
  let windowSum = 0;
  for (let i = 0; i < nums.length; i++) {
    // add element to the window
    windowSum += nums[i];

    if (i >= k - 1) {
      // update the answer

      // remove element from the window
      windowSum -= nums[i - k + 1];
    }
  }
}
