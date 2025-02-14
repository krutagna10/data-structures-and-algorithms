class Queue<Type> {
  items: Type[];

  constructor() {
    this.items = [];
  }

  enqueue(element: Type): void {
    this.items.push(element);
  }

  dequeue(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }
    return this.items.shift() as Type;
  }

  peek(): Type {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }
    return this.items[0];
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  clear(): void {
    this.items = [];
  }
}


