function constantWindow(arr: number[], k: number): number {
  let currSum = 0;
  let maxSum = 0;
  let l = 0;

  for (let r = 0; r < k; r++) {
    currSum += arr[r];
  }
  maxSum = currSum;

  for (let r = k; r < arr.length; r++) {
    // Remove the element at the left pointer from the current sum
    currSum -= arr[l];
    l++;

    // Add the element at the current right pointer to the current sum
    currSum += arr[r];

    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(constantWindow(arr, k));
