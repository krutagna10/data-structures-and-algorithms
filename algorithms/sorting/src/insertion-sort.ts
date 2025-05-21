function insertionSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    let currVal = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > currVal) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = currVal;
  }
  return nums;
}

export default insertionSort;
