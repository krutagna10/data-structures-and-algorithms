/**
 * Class representing a max heap
 * @template {T} - The type of value stored in the heap
 */
class MaxHeap<T> {
  values: T[];

  /**
   * Creates a singly linked list instance
   */
  constructor() {
    this.values = [];
  }

  /**
   * Calculates the parent index
   * @param {number} childIndex - The child index
   * @returns {number} - The parent index
   */
  getParent(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  /**
   * Calculates the left child index
   * @param {number} parentIndex - The parent index
   * @returns {number} - The left child index
   */
  getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  /**
   * Calculaates the right child index
   * @param {number} parentIndex - The parent index
   * @returns {number} - The right child index
   */
  getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  /**
   * Swaps two elements in the heap
   * @param {number} index1 - The index of the first element
   * @param {number} index2 - The index of the second element
   * @returns {void}
   */
  swap(index1: number, index2: number): void {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }

  /**
   * Inserts a new value into the heap
   * @param {T} value - The value to be added to the heap
   * @returns {void}
   */
  insert(value: T): void {
    this.values.push(value);
    this.heapifyUp();
  }

  /**
   * Deletes the maximum value from heap
   * @throws {Error} - An error when the heap is empty
   */
  delete(): T {
    if (this.values.length === 0) {
      throw new Error("Heap Underflow");
    }
    if (this.values.length === 1) {
      return this.values.pop();
    }

    const maxValue = this.values[0];
    this.values[0] = this.values.pop();
    this.heapifyDown();
    return maxValue;
  }

  heapifyUp() {
    let childIndex = this.values.length - 1;
    while (
      childIndex > 0 &&
      this.values[childIndex] > this.values[this.getParent(childIndex)]
    ) {
      const parentIndex = this.getParent(childIndex);
      this.swap(childIndex, parentIndex);
      childIndex = parentIndex;
    }
  }

  heapifyDown(): void {
    let parentIndex = 0;
    while (this.getLeftChildIndex(parentIndex) < this.values.length) {
      let leftChildIndex = this.getLeftChildIndex(parentIndex);
      let rightChildIndex = this.getRightChildIndex(parentIndex);
      if (
        this.values[parentIndex] >= this.values[leftChildIndex] &&
        this.values[parentIndex] >= this.values[rightChildIndex]
      ) {
        break;
      }

      let largerChildIndex = leftChildIndex;
      if (
        rightChildIndex < this.values.length &&
        this.values[rightChildIndex] > this.values[largerChildIndex]
      ) {
        largerChildIndex = rightChildIndex;
      }
      this.swap(parentIndex, largerChildIndex);
      parentIndex = largerChildIndex;
    }
  }
}


export default MaxHeap;
