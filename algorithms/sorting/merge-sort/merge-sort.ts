function merge(nums: number[], l: number, mid: number, r: number): void {
  let i = l;
  let j = mid + 1;
  let k = 0;
  let combinednums = new Array(r - l + 1);

  while (i <= mid && j <= r) {
    if (nums[i] < nums[j]) {
      combinednums[k++] = nums[i++];
    } else {
      combinednums[k++] = nums[j++];
    }
  }

  while (i <= mid) {
    combinednums[k++] = nums[i++];
  }

  while (j <= r) {
    combinednums[k++] = nums[j++];
  }

  for (let i = l; i <= r; i++) {
    nums[i] = combinednums[i - l];
  }
}

function mergeSort(nums: number[], l: number, r: number): void {
  if (l >= r) {
    return;
  }
  const mid = Math.floor((l + r) / 2);
  mergeSort(nums, l, mid);
  mergeSort(nums, mid + 1, r);
  merge(nums, l, mid, r);
}
