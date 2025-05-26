function quickSort(nums: number[], low: number, high: number): number[] {
  debugger;
  if (low >= high) return;
  const partitionIndex = partition(nums, low, high);
  quickSort(nums, low, partitionIndex - 1);
  quickSort(nums, partitionIndex + 1, high);
  return nums;
}

function partition(nums: number[], low: number, high: number): number {
  let i = low;
  let j = high;
  while (i <= j) {
    while (i < high && nums[i] <= nums[low]) i++;
    while (j > low && nums[j] > nums[low]) j--;
    if (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } 
  }
  [nums[low], nums[j]] = [nums[j], nums[low]];
  return j;
}

const nums = [5, 4, 3, 2, 1];
console.log(quickSort(nums, 0, nums.length - 1));

