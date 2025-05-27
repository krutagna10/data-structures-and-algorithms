import TreeNode from "../../../../../data-structures/tree/binary-tree/src/tree-node";

/**
 * @template T - The type of value stored in the tree node
 * @param {TreeNode<T> | null} root - The root of the binary tree
 * @returns {T[]} - An array of values in inorder traversal order
 */
function inorder<T>(root: TreeNode<T> | null): T[] {
  const values: T[] = [];
  const inorderRecursive = (node: TreeNode<T> | null): void => {
    if (node === null) return;
    inorderRecursive(node.left);
    values.push(node.val);
    inorderRecursive(node.right);
  };
  inorderRecursive(root);
  return values;
}

export default inorder;
