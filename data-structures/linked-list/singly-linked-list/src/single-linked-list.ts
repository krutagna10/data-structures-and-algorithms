/**
 * Class representing a node
 * @template {T} - The type of value stored in the node
 */
class Node<T> {
  value: T;
  next: Node<T> | null;

  /**
   * Creates a node instance
   * @param {T} value - The value to be stored in the node
   */
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Class representing a singly linked list
 * @template {T} - The type of value stored in the linked list
 */
class SinglyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  size: number;

  /**
   * Creates a singly linked list instance
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * Adds element at the start of linked list
   * @param {T} value - The value to be added to linked list
   * @returns {void}
   */
  addFirst(value: T): void {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  /**
   * Adds element at the end of linked list
   * @param {T} value - The value to be added to linked list
   * @returns {void}
   */
  addLast(value: T): void {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /**
   * Adds elemnet 
   */

  /**
   * Converts the linked list to an array
   * @returns {T[]} - An array containing all the elements in the linked list
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
   * Checks whether the linked list is empty
   * @returns {boolean} - `true` if linked list if empty, `false` otherwise
   */
  isEmpty(): boolean {
    return this.head === null && this.tail === null;
  }

  /**
   * Gets the size of the linked list
   * @returns {number} - The size of the linked list
   */
  getSize(): number {
    return this.size;
  }

  /**
   * Clears the linked list
   * @returns {void}
   */
  clear(): void {
    this.head = null;
    this.tail = null;
  }
}

export default SinglyLinkedList;
