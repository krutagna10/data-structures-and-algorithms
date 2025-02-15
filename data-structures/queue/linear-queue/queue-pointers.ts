class Queue<Type> {
  private items: Type[];
  private start: number;
  private front: number;
  private rear: number;

  constructor(size: number) {
    this.items = new Array(size);
    this.start = -1;
    this.rear = -1;
    this.front = size;
  }

  enqueue(value: Type): void {
    if (this.isFull()) {
      throw new Error("Queue Overflow");
    }
    if (this.start === -1) {
      this.start = 0;
    }
    this.rear++;
    this.items[this.rear] = value;
  }

  dequeue(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }
    const removedElement = this.items[this.start];
    this.start === this.rear ? this.clear() : this.start++;
    return removedElement;
  }

  peek(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    return this.items[this.start];
  }

  isEmpty(): boolean {
    return this.start === -1;
  }

  isFull(): boolean {
    return this.getSize() === this.front;
  }

  getSize(): number {
    return this.rear + 1;
  }

  clear(): void {
    this.items = new Array(this.front);
    this.start = -1;
    this.rear = -1;
  }
}
