import Stack from "@/data-structures/stack/stack";

/**
 * Performs a dfs traversal on graph starting from a given node
 * @param {Record<string, string[]>} adjacencyList - The graph represented as an adjacency list
 * @param {string} start - The starting node for dfs traversal
 */
function dfs(adjacencyList: Record<string, string[]>, start: string): void {
  const stack = new Stack<string>();
  const visited: Record<string, boolean> = {};
  stack.push(start);

  while (stack.size > 0) {
    const vertex = stack.pop();
    if (visited[vertex]) {
      continue;
    }

    visited[vertex] = true;

    for (const neighbour of adjacencyList[vertex]) {
      stack.push(neighbour);
    }
  }
}

export default dfs;

