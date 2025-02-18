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
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  unshift(val: T): void {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  push(val: T): void {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  inser() {
    
  }

  shift() {
    if (!this.head) {
      throw new Error("Linked List Underflow");
    }

    let currHead;
    if (this.length === 1) {
      currHead = this.head;
      this.head = null;
      this.tail = null;
    } else {
      currHead = this.head;
      this.head = currHead.next;
    }
    this.length--;
    return currHead;
  }

  pop() {
    if (!this.head) {
      throw new Error("Linked List Underflow");
    }

    let removedNode;
    if (this.length === 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      let curr = this.head;
      let newTail = curr;

      while (curr.next !== null) {
        newTail = curr;
        curr = curr.next;
      }
      removedNode = curr;
      this.tail = newTail;
      this.tail.next = null;
    }
    this.length--;
    return removedNode;
  }

  get(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    return currNode;
  }

  set(index: number, val: T): boolean {
    const currNode = this.get(index) ;
    if (currNode) {
      currNode.val = val;
      return true;
    }
    return false;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

const linkedList = new SinglyLinkedList();
linkedList.push("Hel");
linkedList.push("World");
linkedList.set(0, "Hello");
console.log(linkedList);