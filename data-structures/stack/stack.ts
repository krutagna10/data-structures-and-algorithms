class Stack<Type> {
  items: Type[];

  constructor() {
    this.items = [];
  }

  push(value: Type): void {
    this.items.push(value);
  }

  pop(): Type {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow: Cannot pop, stack is empty");
    }

    const removedValue = this.items.pop() as Type;
    return removedValue;
  }

  peek(): Type {
    if (this.isEmpty()) {
      throw new Error("Stack is empty, cannot peek");
    }

    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this.items = [];
  }

  size(): number {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack);
stack.pop();
console.log(stack);
