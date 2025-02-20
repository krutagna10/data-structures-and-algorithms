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
      throw new Error("Queue Overflow");
    }

    if (this.isEmpty()) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.items[this.rear] = value;
  }

  dequeue(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }

    const removedElement = this.peek();
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
    return this.front === -1 && this.rear === -1;
  }

  isFull(): boolean {
    return (
      (this.front === 0 && this.rear === this.size - 1) ||
      this.front === this.rear + 1
    );
  }

  getSize(): number {
    if (this.isEmpty()) {
      return 0;
    }
    return this.front <= this.rear
      ? this.rear - this.front + 1
      : this.size - this.front + this.rear + 1;
  }

  clear() {
    this.front = -1;
    this.rear = -1;
  }
}
