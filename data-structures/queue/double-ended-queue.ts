/**
 * Class representing a double ended queue
 * @template T - The type of elements to be stored in the double ended queue
 */
class DoubleEndedQueue<T> {
  items: T[];
  front: number;
  rear: number;
  size: number;
  maxSize: number;

  /**
   * Creates a double ended queue instance
   * @param {number} maxSize - The stack of double ended queue
   */
  constructor(maxSize: number) {
    this.items = new Array(maxSize);
    this.front = -1;
    this.rear = -1;
    this.size = 0;
    this.maxSize = maxSize;
  }

  /**
   * Adds element at the front of double ended queue
   * @param {T} value - The value to be added to double ended queue
   * @returns {void}
   */
  enqueueFront(value: T): void {
    if (this.isFull()) {
      throw new Error("Double Ended Queue Overflow");
    }
    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else if (this.front === 0) {
      this.front = this.maxSize - 1;
    } else {
      this.front--;
    }
    this.items[this.front] = value;
    this.size++;
  }

  /**
   * Adds element at the rear of double ended queue
   * @param {T} value - The value to added to double ended queue
   * @returns {void}
   */
  enqueueRear(value: T): void {
    if (this.isFull()) {
      throw new Error("Double Ended Queue Overflow");
    }
    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.maxSize;
    }
    this.items[this.rear] = value;
    this.size++;
  }

  /**
   * Removes element from the front of double ended queue
   * @returns {void}
   */
  dequeueFront(): void {
    if (this.isEmpty()) {
      throw new Error("Double Ended Queue Underflow");
    }
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.maxSize;
    }
    this.size--;
  }

  /**
   * Removes element from the rear of double ended queue
   * @returns {void}
   */
  dequeueRear(): void {
    if (this.isEmpty()) {
      throw new Error("Double Ended Queue Underflow");
    }
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.rear === 0) {
      this.rear = this.maxSize - 1;
    } else {
      this.rear--;
    }
    this.size--;
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
   * Checks whether the double ended queue is full
   * @returns {boolean} - `true` if double ended queue is full, `false` otherwise
   */
  isFull(): boolean {
    return this.size === this.maxSize;
  }

  /**
   * Checks whether the double ended queue is empty
   * @returns {boolean} - `true` if double ended queue is empty, `false` otherwise
   */
  isEmpty(): boolean {
    return this.size === 0;
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
