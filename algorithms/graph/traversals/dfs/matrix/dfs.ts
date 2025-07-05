/**
 * Performs a dfs traversal on a graph
 * @template T - The type of value stored in matrix
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

  const _dfs = (row: number, col: number) => {
    if (
      row < 0 ||
      row > rows - 1 ||
      col < 0 ||
      col > cols - 1 ||
      visited[row][col]
    ) {
      return;
    }

    visited[row][col] = true;
    
    for (const [dx, dy] of directions) {
      _dfs(row + dx, col + dy);
    }
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      _dfs(row, col);
    }
  }
}

export default dfs;
