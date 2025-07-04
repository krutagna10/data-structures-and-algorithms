import LinearQueue from "@/data-structures/queue/linear-queue";

/**
 * Performs a bfs traversal on graph starting from a given node
 * @param {string[][]} matrix - A 2D matrix representing the graph
 * @returns {void}
 */
function bfs(matrix: string[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const visited = Array.from({ length: rows }, () => new Array(cols));
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
