import TreeNode from "../../binary-tree/src/tree-node";

/**
 * Class representing a binary search tree
 * @template {T} - The type of value stored in the binary search tree
 */
class BinarySearchTree<T> {
  root: TreeNode<T> | null;
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a value in the binary search tree
   * @param {T} val - The value to be inserted in binary search tree
   * @returns {void}
   */
  insert(val: T): void {
    const insertRecursive = (node: TreeNode<T>): TreeNode<T> => {
      if (node === null) return new TreeNode(val);
      if (node.val > val) {
        node.left = insertRecursive(node.left);
      } else {
        node.right = insertRecursive(node.right);
      }
      return node;
    };
    this.root = insertRecursive(this.root);
  }

  /**
   * Checks whether binary search tree contains a value
   * @param {T} val - The value which should exist in the binary search tree
   * @returns {boolean} - `true` if value exists in the binary search tree, `false` otherwise
   */
  includes(val: T): boolean {
    const includesRecursive = (node: TreeNode<T>): boolean => {
      if (node === null) return false;
      if (node.val === val) {
        return true;
      } else if (node.val > val) {
        return includesRecursive(node.left);
      } else {
        return includesRecursive(node.right);
      }
    };
    return includesRecursive(this.root);
  }

  /**
   * Checks whether the binary search tree is empty
   * @returns {boolean} - `true` if binary search tree is empty, `false` otherwise
   */
  isEmpty(): boolean {
    return this.root === null;
  }
}

export default BinarySearchTree;
