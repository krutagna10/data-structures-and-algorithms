import SinglyLinkedList from "../linked-list/singly-linked-list/src/singly-linked-list";

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
   * @returns {T} - The removed element
   */
  pop(): T {
    if (super.isEmpty()) {
      throw new Error("Stack Underflow");
    }
    return super.deleteFirst();
  }

  /**
   * Retrieves the value at top of the stack
   * @throws {Error} - An error when the stack is empty
   * @returns {T} - The value at top of the stack
   */
  peek(): T {
    if (super.isEmpty()) {
      throw new Error("Stack Empty");
    }
    return this.head.val;
  }
}

export default Stack;
