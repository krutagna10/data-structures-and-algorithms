import ListNode from "./list-node";

/**
 * Class representing a singly linked list
 * @template {T} - The type of value stored in the linked list
 */
class SinglyLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
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
   * @param {T} val - The value to be added to linked list
   * @returns {void}
   */
  addFirst(val: T): void {
    const next = new ListNode(val);
    if (this.isEmpty()) {
      this.head = next;
      this.tail = next;
    } else {
      next.next = this.head;
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
    const next = new ListNode(val);
    if (this.isEmpty()) {
      this.head = next;
      this.tail = next;
    } else {
      this.tail.next = next;
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
      const prev = this.get(index - 1);
      const next = new ListNode(val);
      next.next = prev.next;
      prev.next = next;
      this.size++;
    }
  }

  /**
   * Removes first element from the linked list
   * @throws {Error} - An error when the linked list is empty
   * @returns {T} - The removed element;
   */
  deleteFirst(): T {
    if (this.isEmpty()) throw new Error("Linked List Underflow");
    let removed = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return removed.val;
  }

  /**
   * Removes last element from the linked list
   * @throws {Error} - An error when the linked list is empty
   * @returns {T} - The removed element
   */
  deleteLast(): T {
    if (this.isEmpty()) throw new Error("Linked List Underflow");
    let removed = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      let curr = this.head;
      while (curr.next) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = null;
      this.tail = prev;
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
  delete(index: number): T {
    if (index < 0 || index > this.size - 1) {
      throw new Error("Invalid Index");
    } else if (index === 0) {
      return this.deleteFirst();
    } else if (index === this.size - 1) {
      return this.deleteLast();
    } else {
      const prev = this.get(index - 1);
      const removed = prev.next;
      prev.next = prev.next.next;
      this.size--;
      return removed.val;
    }
  }

  /**
   * Gets the node at the specified index
   * @param {number} index - The index of node which will be returned
   * @throws {Error} - An error when the index is invalid
   * @returns {ListNode<T>} - The node at the index
   */
  get(index: number): ListNode<T> {
    if (index < 0 || index > this.size - 1) throw new Error("Invalid Index");
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr;
  }

  /**
   * Sets the element at the specified index
   * @param {number} index - The index of node which needs to be set
   * @param {T} val - The new value which needs to be set
   */
  set(index: number, val: T): void {
    const curr = this.get(index);
    curr.val = val;
  }

  /**
   * Reverses the linked list
   * @returns {void}
   */
  reverse(): void {
    this.tail = this.head;
    let curr = this.head;
    let prev = null;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  /**
   * Checks whether linked list contains a value
   * @param {T} val - The value which should exist in the linked list
   * @returns {boolean} - `true` if value exists in linked list, `false` otherwise
   */
  includes(val: T): boolean {
    if (this.isEmpty()) return false;
    let curr = this.head;
    while (curr) {
      if (curr.val === val) return true;
      curr = curr.next;
    }
    return false;
  }

  /**
   * Finds the index at which value is present in the linked list
   * @param {T} val - The value whose index needs to be found
   * @returns {number} - The index of value if it's present, -1 otherwise
   */
  indexOf(val: T): number {
    let curr = this.head;
    let index = 0;
    while (curr) {
      if (curr.val === val) return index;
      curr = curr.next;
      index++;
    }
    return -1;
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
   * @returns {boolean} - `true` if linked list if empty, `false` otherwise
   */
  isEmpty(): boolean {
    return this.size === 0;
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
