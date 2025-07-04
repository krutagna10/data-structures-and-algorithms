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
}

const graph = new Graph();
graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addVertex("d");
graph.addEdge("a", "b");
graph.addEdge("a", "d");
graph.addEdge("c", "b");
graph.addEdge("c", "d");

export default Graph;
