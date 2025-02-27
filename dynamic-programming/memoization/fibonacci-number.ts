function fib(n: number, memo: Record<string, number> = {}): number {
  if (memo[n] !== undefined) {
    return memo[n];
  }

  if (n <= 2) {
    return 1;
  }

  const result = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = result;
  return result;
}

console.log(fib(6));
