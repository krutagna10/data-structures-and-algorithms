import TreeNode from "../../../../../data-structures/tree/binary-tree/src/tree-node";

/**
 * @template T - The type of value stored in the tree node
 * @param {TreeNode<T> | null} root - The root of the binary tree
 * @returns {T[]} - An array of values in preorder traversal order
 */
function preorder<T>(root: TreeNode<T> | null): T[] {
  const values: T[] = [];
  const preorderRecursive = (node: TreeNode<T>) => {
    if (node === null) return;
    values.push(node.val);
    preorderRecursive(node.left);
    preorderRecursive(node.right);
  };
  preorderRecursive(root);
  return values;
}

export default preorder;
