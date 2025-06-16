import Comparator from "../../../utils/comparator/comparator";

/**
 * Class representing a min heap
 * @template {T} - The type of value stored in the heap
 */
class MinHeap<T> {
  values: T[];
  comparator: Comparator<T>;

  /**
   * Creates a min heap instance
   * @param {function(T, T):number} compareFunction - Optional custom comparator function
   */
  constructor(compareFunction?: (a: T, b: T) => number) {
    this.values = [];
    this.comparator = new Comparator(compareFunction);
  }

  /**
   * Calculates the parent index
   * @param {number} childIndex - The child index
   * @returns {number} - The parent index
   */
  getParentIndex(childIndex: number): number {
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
   * Calculates the right child index
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
   * Adds a new value into the heap
   * @param {T} value - The value to be added to the heap
   * @returns {void}
   */
  add(value: T): void {
    this.values.push(value);
    this.heapifyUp();
  }

  /**
   * Removes the minimum value from heap
   * @throws {Error} - An error when the heap is empty
   * @returns {T} - The minimum value from the heap
   */
  remove(): T {
    if (this.values.length === 0) {
      throw new Error("Heap Underflow");
    }
    if (this.values.length === 1) {
      return this.values.pop();
    }

    const minValue = this.values[0];
    this.values[0] = this.values.pop();
    this.heapifyDown();
    return minValue;
  }

  /**
   * Retrieves the minimum value from the heap
   * @throws {Error} - An error when the heap is empty
   * @returns {T} - The minimum value from the heap
   */
  peek(): T {
    if (this.values.length === 0) {
      throw new Error("Heap is Empty");
    }
    return this.values[0];
  }

  /**
   * Maintains the heap property by moving the last inserted element up
   * @returns {void}
   */
  heapifyUp(): void {
    let childIndex = this.values.length - 1;
    while (
      childIndex > 0 &&
      this.comparator.lessThan(
        this.values[childIndex],
        this.values[this.getParentIndex(childIndex)]
      )
    ) {
      const parentIndex = this.getParentIndex(childIndex);
      this.swap(childIndex, parentIndex);
      childIndex = parentIndex;
    }
  }

  /**
   * Restores the heap property by moving the element at the given index down
   * @param {number} parentIndex - The index from which heapify down will start
   * @returns {void}
   */
  heapifyDown(parentIndex: number = 0): void {
    while (this.getLeftChildIndex(parentIndex) < this.values.length) {
      let smallerChildIndex = this.getLeftChildIndex(parentIndex);
      let rightChildIndex = this.getRightChildIndex(parentIndex);

      if (
        rightChildIndex < this.values.length &&
        this.comparator.lessThan(
          this.values[rightChildIndex],
          this.values[smallerChildIndex]
        )
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (
        this.comparator.lessThanOrEqual(
          this.values[parentIndex],
          this.values[smallerChildIndex]
        )
      ) {
        break;
      }

      this.swap(parentIndex, smallerChildIndex);
      parentIndex = smallerChildIndex;
    }
  }

  /**
   * Builds a heap from an array
   * @param {T[]} values - The input array
   * @returns {void}
   */
  fromArray(values: T[]): void {
    this.values = values;
    for (let i = Math.floor(this.values.length / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  /**
   * Returns an array consisting of heap values
   * @returns {T[]} - An array consisting of heap values
   */
  toArray(): T[] {
    return this.values;
  }

  /**
   * Returns the size of the heap
   * @returns {number} - The size of the heap
   */
  size(): number {
    return this.values.length;
  }

  /**
   * Checks whether the heap is empty
   * @returns {boolean} - `true` if heap if empty, `false` otherwise
   */
  isEmpty(): boolean {
    return this.values.length === 0;
  }
}

export default MinHeap;
