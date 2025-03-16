/**
 * Class representing a node
 * @template T - the Type of value stored in the node
 */
class Node<T> {
  value: T;
  next: null | Node<T>;

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
 * @template T - The type of elements stored in the stack
 */
class SinglyLinkedList<T> {
  head: null | Node<T>;
  tail: null | Node<T>;

  /**
   * Creates a singly linked list instance
   */
  constructor() {
    this.head = null;
    this.tail = null;
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
   * Adds element at a specified index in linked list
   * @param {number} index - The index at which element will be added
   * @param {T} value - The value to be added to linked list
   * @returns {void}
   */
  add(index: number, value: T): void {
    if (index < 0 || index > this.size()) {
      throw new Error("Invalid Index");
    }

    if (index === 0) {
      this.addFirst(value);
    } else if (index === this.size()) {
      this.addLast(value);
    } else {
      const newNode = new Node(value);
      const currNode = this.get(index);
      const prevNode = this.get(index - 1);
      prevNode.next = newNode;
      newNode.next = currNode;
    }
  }

  /**
   * Removes first element from the linked list
   * @returns {void}
   */
  removeFirst(): void {
    if (this.isEmpty()) {
      throw new Error("Linked List Underflow");
    }

    if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
  }

  /**
   * Removes last element from the linked list
   * @returns {void}
   */
  removeLast(): void {
    if (this.isEmpty()) {
      throw new Error("Linked List Underflow");
    }

    if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currNode = this.head;
      let prevNode = currNode;

      while (currNode.next !== null) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      this.tail = prevNode;
      this.tail.next = null;
    }
  }

  /**
   * Removes element at a specified index from the linked list
   * @param {number} index - The index of element which will be removed
   * @returns {boolean} - `true` if element is successfully removed, `false` otherwise
   */
  remove(index: number): boolean {
    if (index < 0 || index > this.size() - 1) {
      return false;
    }

    if (index === 0) {
      this.removeFirst();
    } else if (index === this.size() - 1) {
      this.removeLast();
    } else {
      const currNode = this.get(index);
      const prevNode = this.get(index - 1);
      prevNode.next = currNode.next;
    }
    return true;
  }

  /**
   * Checks whether linked list contains a value
   * @param {T} value - The value to be checked
   * @returns {boolean} - `true` if value is present in linked list, `false` otherwise
   */
  contains(value: T): boolean {
    if (this.isEmpty()) {
      return false;
    }

    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) {
        return true;
      }
    }
  }

  indexOf(value: T): number {
    if (this.isEmpty()) {
      return -1;
    }

    let index = 0;
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) {
        return index;
      }
      currNode = currNode.next;
      index++;
    }
    return -1;
  }

  get(index: number): Node<T> | undefined {
    if (index < 0 || index > this.size() - 1) {
      return undefined;
    }
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    return currNode;
  }

  set(index: number, value: T): boolean {
    const currNode = this.get(index);
    if (currNode) {
      currNode.value = value;
      return true;
    }
    return false;
  }

  toArray(): T[] {
    let currNode = this.head;
    const values = [];
    while (currNode) {
      values.push(currNode.value);
      currNode = currNode.next;
    }
    return values;
  }

  isEmpty() {
    return !this.head;
  }

  size() {
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

  clear() {
    this.head = null;
    this.tail = null;
  }
}

export default SinglyLinkedList;