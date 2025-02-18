class Node<T> {
  val: T;
  next: null | Node<T>;
  constructor(val: T) {
    this.val = val;
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

  unshift(val: T): void {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  push(val: T): void {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(index: number, val: T): boolean {
    if (index < 0 || index > this.size()) {
      return false;
    }

    if (index === 0) {
      this.unshift(val);
    } else if (index ===this.size() ) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      const currNode = this.get(index);
      const prevNode = this.get(index - 1);
      prevNode.next = newNode;
      newNode.next = currNode;
    }
    return true;
  }

  shift(): void {
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

  pop(): void {
    if (this.isEmpty()) {
      throw new Error("Linked List Underflow");
    }

    if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currNodej = this.head;
      let prevNode = currNodej;

      while (currNodej.next !== null) {
        prevNode = currNodej;
        currNodej = currNodej.next;
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
      this.shift();
    } else if (index === this.size() - 1) {
      this.pop();
    } else {
      const currNode = this.get(index);
      const prevNode = this.get(index - 1);
      prevNode.next = currNode.next;
    }
    return true;
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

  set(index: number, val: T): boolean {
    const currNode = this.get(index);
    if (currNode) {
      currNode.val = val;
      return true;
    }
    return false;
  }

  values(): T[] {
    let currNode = this.head;
    const values = [];
    while (currNode) {
      values.push(currNode.val);
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
