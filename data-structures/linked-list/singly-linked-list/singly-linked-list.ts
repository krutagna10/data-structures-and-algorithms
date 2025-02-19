class Node<T> {
  value: T;
  next: null | Node<T>;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList<T> {
  head: null | Node<T>;
  tail: null | Node<T>;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addFirst(value: T): void {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  addLast(value: T): void {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  add(index: number, value: T): boolean {
    if (index < 0 || index > this.size()) {
      return false;
    }

    if (index === 0) {
      this.addFirst(value);
    } else if (index === this.size()) {
      this.addLast(value);
    } else {
      const newNode = new Node(value);
      const currNode = this.get(index);
      const prevNode = this.get(index - 1);
      prevNode.next = newNode;
      newNode.next = currNode;
    }
    return true;
  }

  removeFirst(): void {
    if (this.isEmpty()) {
      throw new Error("Linked List Underflow");
    }

    if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
  }

  removeLast(): void {
    if (this.isEmpty()) {
      throw new Error("Linked List Underflow");
    }

    if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currNode = this.head;
      let prevNode = currNode;

      while (currNode.next !== null) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      this.tail = prevNode;
      this.tail.next = null;
    }
  }

  remove(index: number): boolean {
    if (index < 0 || index > this.size() - 1) {
      return false;
    }

    if (index === 0) {
      this.removeFirst();
    } else if (index === this.size() - 1) {
      this.removeLast();
    } else {
      const currNode = this.get(index);
      const prevNode = this.get(index - 1);
      prevNode.next = currNode.next;
    }
    return true;
  }

  contains(value: T): boolean {
    if (this.isEmpty()) {
      return false;
    }

    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) {
        return true;
      }
    }
  }

  indexOf(value: T): number {
    if (this.isEmpty()) {
      return -1;
    }

    let index = 0;
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) {
        return index;
      }
      currNode = currNode.next
      index++;
    }
    return -1;
  }

  get(index: number): Node<T> | undefined {
    if (index < 0 || index > this.size() - 1) {
      return undefined;
    }
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    return currNode;
  }

  set(index: number, value: T): boolean {
    const currNode = this.get(index);
    if (currNode) {
      currNode.value = value;
      return true;
    }
    return false;
  }

  toArray(): T[] {
    let currNode = this.head;
    const values = [];
    while (currNode) {
      values.push(currNode.value);
      currNode = currNode.next;
    }
    return values;
  }

  isEmpty() {
    return !this.head;
  }

  size() {
    if (this.isEmpty()) {
      return 0;
    }

    let len = 0;
    let currNode = this.head;
    while (currNode) {
      len++;
      currNode = currNode.next;
    }
    return len;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }
}
