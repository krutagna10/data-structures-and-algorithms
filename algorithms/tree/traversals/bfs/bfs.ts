import TreeNode from "@/data-structures/tree/tree-node";
import LinearQueue from "@/data-structures/queue/linear-queue";

/**
 * Performs a bfs traversal on a tree
 * @template T - The type of value stored in the tree node
 * @param {TreeNode<T> | null} root - The root of the binary tree
 * @returns {T[][]} - An array of values in breadth first search traversal order
 */
function bfs<T>(root: TreeNode<T> | null): T[][] {
  if (root === null) {
    return [];
  }

  const queue = new LinearQueue<TreeNode<T>>();
  const values = [];
  queue.enqueue(root);
  while (queue.size > 0) {
    let levelValues = [];
    let size = queue.size;
    for (let i = size; i > 0; i--) {
      const node = queue.dequeue();
      levelValues.push(node.val);
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
    }
    values.push(levelValues);
  }
  return values;
}

export default bfs;
