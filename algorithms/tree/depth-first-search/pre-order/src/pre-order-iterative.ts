import TreeNode from "../../../../../data-structures/tree/binary-tree/src/tree-node";
import Stack from "../../../../../data-structures/stack/src/stack";

/**
 * @template T - The type of value stored in the tree node
 * @param {TreeNode<T> | null} root - The root of the binary tree
 * @returns {T[]} - An array of values in preorder traversal order
 */
function preorder<T>(root: TreeNode<T> | null): T[] {
  if (root === null) return [];

  const values: T[] = [];
  const stack = new Stack<TreeNode<T> | null>();
  stack.push(root);
  while (stack.size > 0) {
    const node = stack.pop();
    values.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return values;
}

export default preorder;
