class Stack<Type> {
  private items: Type[];
  private top: number;
  private size: number;
  
  constructor(size: number) {
    this.items = new Array(size);
    this.top = -1;
    this.size = size;
  }

  push(value: Type): void {
    if (this.isFull()) {
      throw new Error("Stack Overflow");
    }
    this.top++;
    this.items[this.top] = value;
  }

  pop(): Type {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }
    const removedElement = this.peek();
    this.top--;
    return removedElement;
  }

  peek(): Type {
    if (this.isEmpty()) {
      throw new Error("Stack is Empty");
    }
    return this.items[this.top];
  }

  isEmpty(): boolean {
    return this.top === -1;
  }

  isFull(): boolean {
    return this.getSize() === this.size
  }

  getSize(): number {
    return this.top + 1;
  }

  clear(): void {
    this.items = new Array(this.size);
    this.top = -1
  }
}

