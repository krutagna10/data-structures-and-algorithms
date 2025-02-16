class DoubleEndedQueue<Type> {
  items: Type[];

  constructor() {
    this.items = [];
  }

  enqueueFront(value: Type): void {
    this.items.unshift(value); 
  }

  enqueueRear(value: Type): void {
    this.items.push(value);
  }

  dequeueFront(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }
    return this.items.shift() as Type;
  }

  dequeueRear(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }
    return this.items.pop() as Type;
  }

  getFront(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }

    return this.items[0];
  }

  getRear(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }

    return this.items[this.getSize() - 1];
  }

  isEmpty(): boolean {
    return this.getSize() === 0;
  }

  getSize(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}