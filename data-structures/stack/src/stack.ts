import SinglyLinkedList from "../../linked-list/singly-linked-list/src/single-linked-list";

/**
 * Class representing a stack
 * @template T - The type of value stored in the node
 */
class Stack<T> extends SinglyLinkedList<T> {
  /**
   * Adds value at top of the stack
   * @param {T} value - The value to be added to the stack
   * @returns {void}
   */
  push(value: T): void {
    super.addFirst(value);
  }

  /**
   * Pops value from top of the stack
   * @throws {Error} - An error when the stack is empty
   * @returns {void}
   */
  pop(): void {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }
    super.removeFirst();
  }

  /**
   * Retrieves the value at top of the stack
   * @throws {Error} - An error when the stack is empty
   * @returns {T} - The value at top of the stack
   */
  peek(): T {
    if (this.isEmpty()) {
      throw new Error("Stack Empty");
    }
    return this.head.value;
  }
}

export default Stack;
