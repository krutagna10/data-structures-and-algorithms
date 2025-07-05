import TreeNode from "@/data-structures/tree/tree-node";
import Stack from "@/data-structures/stack/stack";

/**
 * Performs a postorder traversal on a tree
 * @template T - The type of value stored in the tree node
 * @param {TreeNode<T> | null} root - The root of the binary tree
 * @returns {T[]} - An array of values in postorder traversal order
 */
function postorder<T>(root: TreeNode<T> | null): T[] {
  const values = [];
  const stack = new Stack<TreeNode<T> | null>();
  let curr = root;
  while (stack.size > 0 || curr) {
    if (curr) {
      values.push(curr.val);
      stack.push(curr.left);
      curr = curr.right;
    } else {
      curr = stack.pop();
    }
  }
  return values.reverse();
}

export default postorder;
