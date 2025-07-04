import TreeNode from "@/data-structures/tree/tree-node";

/**
 * Performs a inorder traversal on a tree
 * @template T - The type of value stored in the tree node
 * @param {TreeNode<T> | null} root - The root of the binary tree
 * @returns {T[]} - An array of values in inorder traversal order
 */
function inorder<T>(root: TreeNode<T> | null): T[] {
  const values: T[] = [];
  const _inorder = (node: TreeNode<T> | null): void => {
    if (node === null) return;
    _inorder(node.left);
    values.push(node.val);
    _inorder(node.right);
  };
  _inorder(root);
  return values;
}

export default inorder;
