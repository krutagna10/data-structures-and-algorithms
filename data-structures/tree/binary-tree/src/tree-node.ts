/**
 * Class representing a node
 * @template {T} - The type of value stored in the node
 */
class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  /**
   * Creates a node instance
   * @param {T} val - The value to be stored in the node
   */
  constructor(val: T) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export default TreeNode;