import TreeNode from "@/data-structures/tree/tree-node";
import Stack from "@/data-structures/stack/stack";

/**
 * Performs a preorder traversal on a tree
 * @template T - The type of value stored in the tree node
 * @param {TreeNode<T> | null} root - The root of the binary tree
 * @returns {T[]} - An array of values in preorder traversal order
 */
function preorder<T>(root: TreeNode<T> | null): T[] {
  const values = [];
  const stack = new Stack<TreeNode<T> | null>();
  let curr = root;
  while (stack.size > 0 || curr) {
    if (curr) {
      values.push(curr.val);
      stack.push(curr.right);
      curr = curr.left;
    } else {
      curr = stack.pop();
    }
  }
  return values;
}

export default preorder;
