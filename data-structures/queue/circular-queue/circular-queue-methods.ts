class CircularQueue<Type> {
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
