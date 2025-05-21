/**
 * Class representing a node
 * @template {T} - The type of value stored in the nodek
 */
class Node<T> {
  val: T;
  prev: Node<T> | null;
  next: Node<T> | null;

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

/**
 * Class representing a doubly linked list
 * @template {T} - The type of value stored in the linked list
 */
class DoublyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  size: number;

  /**
   * Creates a doubly linked list instance
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * Adds element at the start of linked list
   * @param {T} val - The value to be added to linked list
   * @returns {void}
   */
  addFirst(val: T): void {
    const next = new Node(val);
    if (this.isEmpty()) {
      this.head = next;
      this.tail = next;
    } else {
      next.next = this.head;
      this.head.prev = next;
      this.head = next;
    }
    this.size++;
  }

  /**
   * Adds element at the end of linked list
   * @param {T} val - The value to be added to linked list
   * @returns {void}
   */
  addLast(val: T): void {
    const next = new Node(val);
    if (this.isEmpty()) {
      this.head = next;
      this.tail = next;
    } else {
      this.tail.next = next;
      next.prev = this.tail;
      this.tail = next;
    }
    this.size++;
  }

  /**
   * Adds element at a specified index
   * @param {number} index - The index at which the element will be added
   * @param {T} val - The value to be added to the linked list
   * @throws {Error} - An error when the index is invalid
   * @returns {void}
   */
  add(index: number, val: T): void {
    if (index < 0 || index > this.size) {
      throw new Error("Invalid Index");
    } else if (index === 0) {
      this.addFirst(val);
    } else if (index === this.size) {
      this.addLast(val);
    } else {
      const next = new Node(val);
      const prev = this.get(index - 1);
      next.prev = prev;
      next.next = prev.next;
      prev.next.prev = next;
      prev.next = next;
      this.size++;
    }
  }

  /**
   * Removes element from the start of linked list
   * @throws {Error} - An error when the linked list is empty
   * @returns {T} - The removed element
   */
  removeFirst(): T {
    if (this.isEmpty()) throw new Error("Linked List Underflow");
    const removed = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      removed.next = null;
    }
    this.size--;
    return removed.val;
  }

  /**
   * Remove last element from the linked list
   * @throws {Error} - An error when the linked list is empty
   * @returns {T} - The removed element
   */
  removeLast(): T {
    if (this.isEmpty()) throw new Error("Linked List Underflow");
    const removed = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removed.prev = null;
    }
    this.size--;
    return removed.val;
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
      const prev = this.get(index - 1);
      const removed = prev.next;
      prev.next = prev.next.next;
      prev.next.prev = prev;
      removed.prev = null;
      removed.next = null;
      this.size--;
      return removed.val;
    }
  }

  /**
   * Gets the node at the specified index
   * @param {number} index - The index of node which will be returned
   * @throws {Error} - An error when the index is invalid
   * @returns {Node<T>} - The node at the index
   */
  get(index: number): Node<T> {
    if (index < 0 || index > this.size - 1) throw new Error("Invalid Index");
    let curr;
    if (index < this.size / 2) {
      curr = this.head;
      for (let i = 0; i < index; i++) {
        curr = curr.next;
      }
    } else {
      curr = this.tail;
      for (let i = this.size - 1; i > index; i--) {
        curr = curr.prev;
      }
    }
    return curr;
  }

  /**
   * Sets the element at the specified index
   * @param {number} index  The index of node which needs to be set
   * @param {T} val - The new value which needs to be set
   */
  set(index: number, val: T): void {
    const curr = this.get(index);
    curr.val = val;
  }

  /**
   * Converts the linked list values to an array
   * @returns {T[]} - An array containing all the elements in the linked list
   */
  toArray(): T[] {
    if (this.isEmpty()) return [];
    const values = [];
    let curr = this.head;
    while (curr) {
      values.push(curr.val);
      curr = curr.next;
    }
    return values;
  }

  /**
   * Checks whether the linked list is empty
   * @returns {boolean} - `true`if linked list is empty, `false` otherwise
   */
  isEmpty(): boolean {
    return this.size === 0;
  }
}

const list = new DoublyLinkedList();
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.remove(1);
console.log(list);

export default DoublyLinkedList;
