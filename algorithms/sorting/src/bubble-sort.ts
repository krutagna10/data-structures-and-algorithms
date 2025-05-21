function bubbleSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    let isSorted = true;
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        isSorted = false;
      }
    }
    if (isSorted) break;
  }
  return nums;
}

export default bubbleSort;
