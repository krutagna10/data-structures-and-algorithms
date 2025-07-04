import TreeNode from "../../../../data-structures/tree/binary-tree/src/tree-node";
import Stack from "../../../../data-structures/stack/stack";

/**
 * @template T - The type of value stored in the tree node
 * @param {TreeNode<T> | null} root - The root of the binary tree
 * @returns {T[]} - An array of values in postorder traversal order
 */
function postorder<T>(root: TreeNode<T> | null): T[] {
  const values: T[] = [];
  const _postorder = (node: TreeNode<T> | null): void => {
    if (node === null) return;
    _postorder(node.left);
    _postorder(node.right);
    values.push(node.val);
  };
  _postorder(root);
  return values;
}

export default postorder;
