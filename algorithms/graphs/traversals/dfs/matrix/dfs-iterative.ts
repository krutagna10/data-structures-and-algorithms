import Stack from "@/data-structures/stack/stack";

/**
 * Performs a dfs traversal on a graph
 * @param {string[][]} matrix - A 2D matrix representing the graph
 * @returns {void}
 */
function dfs(matrix: string[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const visited = Array.from({ length: rows }, () =>
    new Array(cols).fill(false)
  );
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const _dfs = (row: number, col: number): void => {
    const stack = new Stack<[number, number]>();
    stack.push([row, col]);

    while (stack.size > 0) {
      const [row, col] = stack.pop();
      if (
        row < 0 ||
        row > rows - 1 ||
        col < 0 ||
        col > cols - 1 ||
        visited[row][col]
      ) {
        continue;
      }

      for (const [dx, dy] of directions) {
        stack.push([row + dx, col + dy]);
      }
    }
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      _dfs(row, col);
    }
  }
}

export default dfs;
