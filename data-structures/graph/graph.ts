class Graph {
  adjacencyList: Record<string, string[]>;
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  deleteVertex(vertex: string): void {
    for (const adjacentVertex of this.adjacencyList[vertex]) {
      this.deleteEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  addEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  deleteEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  dfs(starting: string): string[] {
    const result = [];
    const visitedVertex: Record<string, boolean> = {};

    const _dfs = (vertex: string) => {
      if (visitedVertex[vertex]) {
        return;
      }
      result.push(vertex);
      visitedVertex[vertex] = true;
      for (const neighbour of this.adjacencyList[vertex]) {
        _dfs(neighbour);
      }
    };

    _dfs(starting);
    return result;
  }
}

const graph = new Graph();
graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addVertex("d");
graph.addVertex("e");
graph.addVertex("f");
graph.addEdge("a", "b");
graph.addEdge("a", "c");
graph.addEdge("b", "d");
graph.addEdge("c", "e");
graph.addEdge("d", "e");
graph.addEdge("d", "f");
graph.addEdge("f", "d");

