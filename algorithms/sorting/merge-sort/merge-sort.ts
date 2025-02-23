function merge(arr: number[], low: number, mid: number, high: number): void {
  let i = low;
  let j = mid + 1;
  let k = 0;
  let combinedArr = new Array(high - low + 1);

  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      combinedArr[k++] = arr[i++];
    } else {
      combinedArr[k++] = arr[j++];
    }
  }

  while (i <= mid) {
    combinedArr[k++] = arr[i++];
  }

  while (j <= high) {
    combinedArr[k++] = arr[j++];
  }

  for (let m = low; m <= high; m++) {
    arr[m] = combinedArr[m - low];
  }
}

function mergeSort(arr: number[], low: number, high: number): void {
  if (low >= high) {
    return;
  }
  const mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}
