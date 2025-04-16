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
    this.size++;
  }

  /**
   * Adds element at a specified index
   * @param {number} index - The index at which the element will be added
   * @param {T} value - The value to be added to the linked list
   * @returns [void]
   */
  add(index: number, value: T): void {
    if (index < 0 || index > this.size) {
      throw new Error("Invalid Index");
    } else if (index === 0) {
      this.addFirst(value);
    } else if (index === this.size) {
      this.addLast(value);
    } else {
      const prevNode = this.get(index - 1);
      const currNode = this.get(index);
      const newNode = new Node(value);
      prevNode.next = newNode;
      newNode.next = currNode;
      this.size++;
    }
  }

  /**
   * Removes first element from the linked list
   * @throws {Error} - An error when the linked list is empty
   * @returns {T} - The removed element;
   */
  removeFirst(): T {
    let removedElement;
    if (this.isEmpty()) {
      throw new Error("Linked List Underflow");
    } else if (this.size === 1) {
      removedElement = this.head.value;
      this.clear();
    } else {
      removedElement = this.head.value;
      this.head = this.head.next;
      this.size--;
    }
    return removedElement;
  }

  /**
   * Removes last element from the linked list
   * @throws {Error} - An error when the linked list is empty
   * @returns {T} - The removed element
   */
  removeLast(): T {
    let removedElement;
    if (this.isEmpty()) {
      throw new Error("Linked List Underflow");
    } else if (this.size === 1) {
      removedElement = this.tail.value;
      this.clear();
    } else {
      removedElement = this.tail.value;
      let prevNode = this.head;
      let currNode = this.head;
      while (currNode.next) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      prevNode.next = null;
      this.tail = prevNode;
      this.size--;
    }
    return removedElement;
  }

  /**
   * Removes the element at a specified index
   * @param {number} index - The index of the element which will be removed
   * @throws {Error} - An error when the index is invalid 
   * @returns {T} - The removed element
   */
  remove(index: number): T {
    if (index < 0 || index > this.size - 1) {
      throw new Error("Invalid Index");
    } else if (index === 0) {
      return this.removeFirst();
    } else if (index === this.size - 1) {
      return this.removeLast();
    } else {
      const prevNode = this.get(index - 1);
      const currNode = this.get(index);
      prevNode.next = currNode.next;
      this.size--;
      return currNode.value;
    }
  }

  /**
   * Gets the node at the specified index
   * @param {number} index - The index of node which will be returned
   * @throws {Error} - An error when the index is invalid
   * @returns {Node<T>} - The node at the index
   */
  get(index: number): Node<T> {
    if (index < 0 || index > this.size - 1) {
      throw new Error("Invalid Index");
    }
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    return currNode;
  }

  /**
   * Sets the element at the specified index
   * @param {number} index - The index of node which needs to be set
   * @param {T} value - The new value which needs to be set
   */
  set(index: number, value: T): void {
    const currNode = this.get(index);
    currNode.value = value;
  }

  /**
   * Checks whether linked list contains a value
   * @param {T} value - The value which should exist in the linked list
   * @returns {boolean} - `true` if value exists in linked list, `false` otherwise
   */
  includes(value: T): boolean {
    if (this.isEmpty()) {
      return false;
    }
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) {
        return true;
      }
    }
    return false;
  }

  /**
   * Converts the linked list values to an array
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
   * Clears the linked list
   * @returns {void}
   */
  clear(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

export default SinglyLinkedList;
