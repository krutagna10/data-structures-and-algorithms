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
