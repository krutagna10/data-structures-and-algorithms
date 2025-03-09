/**
 * Class representing a node
 * @template T - The type of value stored in node.
 */
class Node<T> {
  value: T;
  next: null | Node<T>;

  /**
   * Creates a node instance
   * @param {T} value - The value to be stored in the node.
   */
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Class representing a stack
 * @template T - The type of elements stored in stack
 */
class Stack<T> {
  head: null | Node<T>;
  tail: null | Node<T>;

  /**
   * Creates a stack instance
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Pushes element at the pop of stack
   * @param {T} value - The value to be added to stack
   * @returns {void}
   */
  push(value: T): void {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  /**
   * Pops element from the top of stack
   * @throws {Error} - An error when the stack is empty
   * @returns {void}
   */
  pop(): void {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    } else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
  }

  /**
   * Retrives the value at the top of stack
   * @throws {Error} - An error when the stack the empty
   * @returns {T} - The value at the top of stack
   */
  peek(): T {
   if (this.isEmpty()) {
    throw new Error("Stack Underflow");
   } 
   return this.head.value;
  }

  /**
   * Creates an array representation of the stack
   * @returns {T[]} - An array containing all elements in the stack
   */
  toArray(): T[] {
    if (this.isEmpty()) {
      return [];
    }

    const values = [];
    let currNode = this.head;
    while (currNode) {
      values.push(currNode.value);
      currNode = currNode.next;
    }
    return values;
  }

  /**
   * Checks whether the stack is empty
   * @returns {boolean} - `true` if stack is empty, false otherwise
   */
  isEmpty(): boolean {
    return this.head === null;
  }

  /**
   * Calculates the size of the stack
   * @returns {number} - The size of stack
   */
  size(): number {
    if (this.isEmpty()) {
      return 0;
    } 
    let len = 0;
    let currNode = this.head;
    while (currNode) {
      len++;
      currNode = currNode.next;
    }
    return len;
  }
}

export default Stack;
