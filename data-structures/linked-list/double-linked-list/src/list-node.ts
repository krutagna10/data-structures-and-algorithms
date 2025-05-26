/**
 * Class representing a node
 * @template {T} - The type of value stored in the nodek
 */
class ListNode<T> {
  val: T;
  prev: ListNode<T> | null;
  next: ListNode<T> | null;

  /**
   * Creates a node instance
   * @param {T} val - The value to be stored in the node
   */
  constructor(val: T) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

export default ListNode;
