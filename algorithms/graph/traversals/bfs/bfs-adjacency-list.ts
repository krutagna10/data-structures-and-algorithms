import LinearQueue from "@/data-structures/queue/linear-queue";

/**
 * Performs a bfs traversal on graph starting from a given node
 * @param {Record<string, string[]>} adjacencyList - The graph represented as an adjacency list
 * @param {string} start - The starting node for bfs traversal
 */
function bfs(adjacencyList: Record<string, string[]>, start: string): void {
  const queue = new LinearQueue<string>();
  const visited: Record<string, boolean> = {};
  queue.enqueue(start);

  while (queue.size > 0) {
    const vertex = queue.dequeue();
    if (visited[vertex]) {
      continue;
    }

    visited[vertex] = true;

    for (const neighbour of adjacencyList[vertex]) {
      queue.enqueue(neighbour);
    }
  }
}

export default bfs;
