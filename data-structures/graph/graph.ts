/**
 * Class representing a graph
 * @template {T} - The type of value stored in the graph
 */
class Graph<T> {
  adjacencyList: Map<T, T[]>;

  /**
   * Creates a graph instance
   */
  constructor() {
    this.adjacencyList = new Map();
  }

  /**
   * Adds a vertex in the graph
   * @param {T} vertex - The vertex to be added to graph
   * @returns {void}
   */
  addVertex(vertex: T): void {
    this.adjacencyList.set(vertex, []);
  }

  /**
   * Deletes a vertex from the graph
   * @param {T} vertex - The vertex to be deleted from the graph
   * @returns {void}
   */
  deleteVertex(vertex: T): void {
    for (const adjacentVertex of this.adjacencyList.get(vertex)) {
      this.deleteEdge(vertex, adjacentVertex);
    }
    this.adjacencyList.delete(vertex);
  }

  /**
   * Adds an edge between two vertices
   * @param {T} vertex1 - The vertex1
   * @param {T} vertex2 - The vertex2
   * @returns {void}
   */
  addEdge(vertex1: T, vertex2: T): void {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex1).push(vertex1);
  }

  /**
   * Deletes an edge between two vertices
   * @param {T} vertex1 - The vertex1
   * @param {T} vertex2 - The vertex2
   * @returns {void}
   */
  deleteEdge(vertex1: T, vertex2: T): void {
    this.adjacencyList.set(
      vertex1,
      this.adjacencyList.get(vertex1).filter((vertex) => vertex !== vertex2)
    );
    this.adjacencyList.set(
      vertex2,
      this.adjacencyList.get(vertex2).filter((vertex) => vertex !== vertex1)
    );
  }
}

export default Graph;
