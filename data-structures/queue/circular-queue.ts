/**
 * Class representing a circular queue
 * @template T - The type of value stored in the circular queue
 */
class CircularQueue<T> {
  items: T[];
  front: number;
  rear: number;
  size: number;
  maxSize: number;

  /**
   * Creates a circular queue instance
   * @param {number} maxSize - The maximum size of the circular queue
   */
  constructor(maxSize: number) {
    this.items = new Array(maxSize);
    this.front = -1;
    this.rear = -1;
    this.size = 0;
    this.maxSize = maxSize;
  }

  /**
   * Adds element at the end of the circular queue
   * @param {T} value - The value to be added to the circular queue
   * @throws {Error} - An error when the circular queue is full
   * @returns {void}
   */
  enqueue(value: T): void {
    if (this.isFull()) {
      throw new Error("Queue Overflow");
    }

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.maxSize;
    }
    this.size++;
    this.items[this.rear] = value;
  }

  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }

    const removedElement = this.peek();
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.maxSize;
    }
    this.size--;
    return removedElement;
  }

  peek(): T {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    return this.items[this.front];
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull(): boolean {
    return this.size === this.maxSize;
  }

  clear() {
    this.front = -1;
    this.rear = -1;
  }
}

export default CircularQueue;
