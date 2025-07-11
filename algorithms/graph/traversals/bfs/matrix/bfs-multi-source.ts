import LinearQueue from "@/data-structures/queue/linear-queue";

/**
 * Performs a multi source bfs traversal on a graph
 * @template T - The type of value stored in matrix
 * @param {string[][]} matrix - A 2D matrix representing the graph
 * @returns {void}
 */
function bfs<T>(matrix: T[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const queue = new LinearQueue<[number, number]>();
  const visited = Array.from({ length: rows }, () =>
    new Array(cols).fill(false)
  );
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // add [row, col] in queue at a specific condition
    }
  }

  while (queue.size > 0) {
    let size = queue.size;
    for (let i = size; i > 0; i--) {
      const [currRow, currCol] = queue.dequeue();
      for (const [dx, dy] of directions) {
        const row = currRow + dx;
        const col = currCol + dy;

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
        queue.enqueue([row, col]);
      }
    }
  }
}

export default bfs;
