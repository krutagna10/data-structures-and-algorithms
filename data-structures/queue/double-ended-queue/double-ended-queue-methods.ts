class DoubleEndedQueue<Type> {
  items: Type[];

  constructor() {
    this.items = [];
  }

  addFront(value: Type): void {
    this.items.unshift(value); 
  }

  addRear(value: Type): void {
    this.items.push(value);
  }

  removeFront(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }
    return this.items.shift() as Type;
  }

  removeRear(): Type {
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

    return this.items[this.size() - 1];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}