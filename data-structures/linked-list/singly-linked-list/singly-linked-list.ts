// Stores piece of data & references to next node
class Node<Type> {
  val: Type;
  next: null | Node<Type>;
  constructor(val: Type) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList<Type> {
  head: null | Node<Type>;
  tail: null | Node<Type>;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: Type): this {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      (this.tail as Node<Type>).next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const linkedList = new SinglyLinkedList();
