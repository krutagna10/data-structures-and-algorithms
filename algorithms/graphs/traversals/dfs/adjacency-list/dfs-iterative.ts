import Graph from "@/data-structures/graph/graph";
import Stack from "@/data-structures/stack/stack";

function dfs(adjacencyList: Record<string, string[]>, start: string): void {
  const stack = new Stack<string>();
  stack.push(start);

  while (stack.size > 0) {
    const vertex = stack.pop();

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
