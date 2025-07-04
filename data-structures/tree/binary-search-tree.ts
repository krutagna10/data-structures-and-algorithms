import TreeNode from "./tree-node";

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
    const _insert = (node: TreeNode<T>): TreeNode<T> => {
      if (node === null) {
        return new TreeNode(val);
      }

      if (node.val > val) {
        node.left = _insert(node.left);
      } else {
        node.right = _insert(node.right);
      }
      return node;
    };
    this.root = _insert(this.root);
  }

  /**
   * Deletes the node with given value from binary search tree
   * @param {T} val - The value of node to be deleted
   * @returns {void}
   */
  delete(val: T): void {
    const _delete = (node: TreeNode<T> | null, val: T): TreeNode<T> | null => {
      if (node === null) {
        return null;
      }

      if (node.val === val) {
        if (node.left === null && node.right === null) {
          return null;
        } else if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        } else {
          let curr = node.right;
          while (curr.left) {
            curr = curr.left;
          }
          node.val = curr.val;
          node.right = _delete(node.right, node.val);
        }
      } else if (node.val > val) {
        node.left = _delete(node.left, val);
      } else {
        node.right = _delete(node.right, val);
      }

      return node;
    };
    _delete(this.root, val);
  }

  /**
   * Finds minimum value in the binary search tree
   * @returns {T} - The minimum value if binary search tree is not null, null otherwise
   */
  findMin(): T | null {
    if (this.root === null) {
      return null;
    }

    let curr = this.root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.val;
  }

  /**
   * Finds maximum value in the binary search tree
   * @returns {T} - The maximum value if binary search tree is not null, null otherwise
   */
  findMax(): T | null {
    if (this.root === null) {
      return null;
    }

    let curr = this.root;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.val;
  }

  /**
   * Checks whether binary search tree contains a value
   * @param {T} val - The value which should exist in the binary search tree
   * @returns {boolean} - `true` if value exists in the binary search tree, `false` otherwise
   */
  includes(val: T): boolean {
    const _includes = (node: TreeNode<T>): boolean => {
      if (node === null) {
        return false;
      }

      if (node.val === val) {
        return true;
      } else if (node.val > val) {
        return _includes(node.left);
      } else {
        return _includes(node.right);
      }
    };
    return _includes(this.root);
  }

  /**
   * Finds the minimum in the binary search tree
   */

  /**
   * Checks whether the binary search tree is empty
   * @returns {boolean} - `true` if binary search tree is empty, `false` otherwise
   */
  isEmpty(): boolean {
    return this.root === null;
  }
}

export default BinarySearchTree;
