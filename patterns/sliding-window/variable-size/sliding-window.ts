/**
 * Applies a variable size sliding window over an array
 * @param {number[]} nums - The input array
 * @returns {void}
 */
function slidingWindow(nums: number[], k: number): void {
  let left = 0;
  
  for (let right = 0; right < nums.length; right++) {
    // add nums[right] to the window

    while(true) {
      // remove nums[left] from the window
      left++;
    }

    // update the answer
  }
}
