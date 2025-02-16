class DoubleEndedQueue<Type> {
  items: Type[];
  size: number;
  front: number;
  rear: number;

  constructor(size: number) {
    this.items = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }

  enqueueFront(value: Type): void {
    if (this.isFull()) {
      throw new Error("Queue Overflow");
    }

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else if (this.front === 0) {
      this.front = this.size - 1;
    } else {
      this.front--;
    }
    this.items[this.front] = value;
  }

  enqueueRear(value: Type): void {
    if (this.isFull()) {
      throw new Error("Queue Overflow");
    }

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.size;
    }
    this.items[this.rear] = value;
  }

  dequeueFront(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }

    const removedElement = this.getFront();
    if (this.front === this.rear) {
      this.clear();
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return removedElement;
  }

  dequeueRear(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }

    const removedElement = this.getRear();
    if (this.rear === 0) {
      this.rear = this.size - 1;
    } else {
      this.rear--;
    }
    return removedElement;
  }

  getFront(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    return this.items[this.front];
  }

  getRear(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    return this.items[this.rear];
  }

  isEmpty(): boolean {
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
