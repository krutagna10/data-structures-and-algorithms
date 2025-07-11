import LinearQueue from "@/data-structures/queue/linear-queue";

/**
 * Performs a single source bfs traversal on a graph
 * @template T - The type of value stored in matrix
 * @param {string[][]} matrix - A 2D matrix representing the graph
 * @returns {void}
 */
function bfs<T>(matrix: T[][]): void {
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

  const _bfs = (row: number, col: number): void => {
    const queue = new LinearQueue<[number, number]>();
    queue.enqueue([row, col]);

    while (queue.size > 0) {
      const [row, col] = queue.dequeue();
      if (
        row < 0 ||
        row > rows - 1 ||
        col < 0 ||
        col > cols - 1 ||
        visited[row][col]
      ) {
        continue;
      }

      visited[row][col] = true;

      for (const [dx, dy] of directions) {
        queue.enqueue([row + dx, col + dy]);
      }
    }
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      _bfs(row, col);
    }
  }
}

export default bfs;
