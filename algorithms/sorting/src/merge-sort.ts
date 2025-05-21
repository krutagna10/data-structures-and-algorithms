function mergeSort(nums: number[]): number[] {
  mergeSortHelper(nums, 0, nums.length - 1);
  return nums;
}

function mergeSortHelper(nums: number[], l: number, r: number): void {
  if (l >= r) return;
  const mid = Math.floor((l + r) / 2);
  mergeSortHelper(nums, l, mid);
  mergeSortHelper(nums, mid + 1, r);
  merge(nums, l, mid, r);
}

function merge(nums: number[], l: number, mid: number, r: number): void {
  const mergedNums = [];
  let i = l;
  let j = mid + 1;
  while (i <= mid && j <= r) mergedNums.push(nums[i] < nums[j] ? nums[i++] : nums[j++]);
  while (i <= mid) mergedNums.push(nums[i++]);
  while (j <= r) mergedNums.push(nums[j++]);
  for (let i = l; i <= r; i++) {
    nums[i] = mergedNums[i - l];
  }
}

export default mergeSort;
