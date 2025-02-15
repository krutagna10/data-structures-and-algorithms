class CircularQueue<Type> {
  items: Type[];
  front: number;
  rear: number;
  size: number;

  constructor(size: number) {
    this.items = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }

  enqueue(value: Type): void {
    if (this.isFull()) {
      console.log("Queue Overflow");
    }
    if (this.front === -1) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.items[this.rear] = value;
  }

  dequeue(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }
    const removedElement = this.items[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return removedElement;
  }

  peek(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    return this.items[this.front];
  }

  isEmpty() {
    return this.front === -1;
  }

  isFull(): boolean {
    if (
      (this.front === 0 && this.rear === this.size - 1) ||
      this.front === this.rear + 1
    ) {
      return true;
    }

    return false;
  }

  getSize() {
    if (this.isEmpty()) {
      return 0;
    }

    if (this.front <= this.rear) {
      return this.rear - this.front + 1;
    }
    return this.size - this.front + this.rear + 1;
  }

  clear() {
    this.front = -1;
    this.rear = -1;
  }
}
