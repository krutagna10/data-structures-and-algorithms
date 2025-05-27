import TreeNode from "../../../data-structures/tree/binary-tree/src/tree-node";
import Queue from "../../../data-structures/queue/linear-queue/src/linear-queue";

function breadthFirstSearch<T>(root: TreeNode<T> | null): T[] {
  if (root === null) return [];
  const queue = new Queue<TreeNode<T>>();
  const values = [];
  queue.enqueue(root);
  while (queue.size > 0) {
    const node = queue.dequeue();
    values.push(node.val);
    if (node.left) queue.enqueue(node.left);
    if (node.right) queue.enqueue(node.right);
  }
  return values;
}

export default breadthFirstSearch;
