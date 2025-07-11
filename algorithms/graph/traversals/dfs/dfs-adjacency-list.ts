/**
 * Performs a dfs traversal on graph starting from a given node
 * @param {Record<string, string[]>} adjacencyList - The graph represented as an adjacency list
 * @param {string} start - The starting node for dfs traversal
 */

function dfs(adjacencyList: Record<string, string[]>, start: string): void {
  const visitedVertex: Record<string, boolean> = {};

  const _dfs = (vertex: string) => {
    if (visitedVertex[vertex]) {
      return;
    }

    visitedVertex[vertex] = true;
    for (const neighbour of adjacencyList[vertex]) {
      _dfs(neighbour);
    }
  };

  _dfs(start);
}

export default dfs;
