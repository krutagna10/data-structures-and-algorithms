class Stack<Type> {
  private items: Type[];

  constructor() {
    this.items = [];
  }

  push(value: Type): void {
    this.items.push(value);
  }

  pop(): Type {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }
    return this.items.pop as Type;
  }

  peek(): Type {
    if (this.isEmpty()) {
      throw new Error("Stack is Empty");
    }

    return this.items[this.getSize() - 1];
  }

  isEmpty(): boolean {
    return this.getSize() === 0;
  }

  clear(): void {
    this.items = [];
  }

  getSize(): number {
    return this.items.length;
  }
}

