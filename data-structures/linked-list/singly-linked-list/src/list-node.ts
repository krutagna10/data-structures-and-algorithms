/**
 * Class representing a node
 * @template {T} - The type of value stored in the node
 */
class ListNode<T> {
  val: T;
  next: ListNode<T> | null;

  /**
   * Creates a node instance
   * @param {T} val - The value to be stored in the node
   */
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export default ListNode;

