import SinglyLinkedList from "../../linked-list/singly-linked-list/src/singly-linked-list";

/**
 * Class representing a queue
 * @template T - The type of value stored in the node
 */
class Queue<T> extends SinglyLinkedList<T> {
  /**
   * Adds element at the end of the queue
   * @param {T} value - The value to be added to the queue
   * @returns {void}
   */
  enqueue(value: T): void {
    super.addLast(value);
  }

  /**
   * Removes element from the start of the queue
   * @throws {Error} - An error when the queue is empty
   * @returns {T} - The value at the start of the queue
   */
  dequeue(): T {
    if (super.isEmpty()) {
      throw new Error("Queue Underflow");
    }
    return super.removeFirst();
  }

  /**
   * Retrieves the value at the start of the queue
   * @throws {Error} - An error when the queue is empty
   * @returns {T} - The value at the start of the queue
   */
  peek(): T {
    if (super.isEmpty()) {
      throw new Error("Queue Empty");
    }
    return this.head.val;
  }
}

export default Queue;
