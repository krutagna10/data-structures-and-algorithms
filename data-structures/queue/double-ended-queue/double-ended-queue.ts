/**
 * Class representing a double ended queue
 * @template T - The type of elements to be stored in the double ended queue
 */
class DoubleEndedQueue<T> {
  items: T[];
  front: number;
  rear: number;
  size: number;

  /**
   * Creates a double ended queue instance
   * @param {number} size - The stack of double ended queue
   */
  constructor(size: number) {
    this.items = [];
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }

  /**
   * Adds element at the front of double ended queue
   * @param {T} value - The value to be added to double ended queue
   * @returns {void}
   */
  enqueueFront(value: T): void {
    if (this.isFull()) {
      throw new Error("Double Ended Queue Overflow");
    } else if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else if (this.front === 0) {
      this.front = this.size - 1;
    } else {
      this.front--;
    }
    this.items[this.front] = value;
  }

  /**
   * Adds element at the rear of double ended queue
   * @param {T} value - The value to added to double ended queue
   * @returns {void}
   */
  enqueueRear(value: T): void {
    if (this.isFull()) {
      throw new Error("Double Ended Queue Overflow");
    } else if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.size;
    }
    this.items[this.rear] = value;
  }

  /**
   * Removes element from the front of double ended queue
   * @returns {void}
   */
  dequeueFront(): void {
    if (this.isEmpty()) {
      throw new Error("Double Ended Queue Underflow");
    } else if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
  }

  /**
   * Removes element from the rear of double ended queue
   * @returns {void}
   */
  dequeueRear(): void {
    let removedElement;
    if (this.isEmpty()) {
      throw new Error("Double Ended Queue Underflow");
    } else if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.rear === 0) {
      this.rear = this.size - 1;
    } else {
      this.rear--;
    }
  }

  /**
   * Gets element at the front of double ended queue
   * @returns {T} - The element at the front
   */
  getFront(): T {
    if (this.isEmpty()) {
      throw new Error("Double Unded Queue is Empty");
    }
    return this.items[this.front];
  }

  /**
   * Gets element at the rear of double ended queue
   * @returns {T} - The element at the rear
   */
  getRear(): T {
    if (this.isEmpty()) {
      throw new Error("Double Unded Queue is Empty");
    }
    return this.items[this.rear];
  }

  /**
   * Converts the double ended queue to an array
   * @returns {T[]} - An array containing all the elements in the queue
   */
  toArray(): T[] {
    return this.items;
  }

  /**
   * Checks whether the double ended queue is full
   * @returns {boolean} - `true` if double ended queue is full, `false` otherwise
   */
  isFull(): boolean {
    return (
      (this.front === 0 && this.rear === this.size - 1) ||
      this.front === this.rear + 1
    );
  }

  /**
   * Checks whether the double ended queue is empty
   * @returns {boolean} - `true` if double ended queue is empty, `false` otherwise
   */
  isEmpty(): boolean {
    return this.front === -1 && this.rear === -1;
  }

  /**
   * Calculates the size of double ended queue
   * @returns {number} - The size of double ended queue
   */
  getSize(): number {
    if (this.isEmpty()) {
      return 0;
    }
    return this.front <= this.rear
      ? this.rear - this.front + 1
      : this.size - this.front + this.rear + 1;
  }

  /**
   * Clears the double ended queue
   * @returns {void}
   */
  clear(): void {
    this.front = -1;
    this.rear = -1;
  }
}

export default DoubleEndedQueue;
