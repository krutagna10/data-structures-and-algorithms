import { test, expect, beforeEach, describe } from "@jest/globals";
import DoublyLinkedList from "../src/doubly-linked-list";

let linkedList: DoublyLinkedList<number>;
beforeEach(() => {
  linkedList = new DoublyLinkedList<number>();
});

describe("Insertion", () => {
  test("should add element at the start of linked list", () => {
    linkedList.addFirst(1);
    linkedList.addFirst(2);
    expect(linkedList.toArray()).toEqual([2, 1]);
  });

  test("should add element at the end of linked list", () => {
    linkedList.addLast(1);
    linkedList.addLast(2);
    expect(linkedList.toArray()).toEqual([1, 2]);
  });

  test("should add element at a specified index in linked list", () => {
    linkedList.add(0, 1);
    linkedList.add(1, 3);
    linkedList.add(1, 2);
    expect(linkedList.toArray()).toEqual([1, 2, 3]);
  });

  test("should throw an error when adding at an invalid index", () => {
    expect(() => linkedList.add(-1, 0)).toThrow("Invalid Index");
  });
});

describe("Removal", () => {
  test("should remove the first element from the linked list", () => {
    linkedList.addFirst(1);
    linkedList.addFirst(2);
    linkedList.removeFirst();
    expect(linkedList.toArray()).toEqual([1]);
  });

  test("should remove the last element from the linked list", () => {
    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.removeLast();
    expect(linkedList.toArray()).toEqual([1]);
  });

  test("should throw an error when removing element from empty linked list", () => {
    expect(() => linkedList.removeLast()).toThrow("Linked List Underflow");
  });

  test("should remove element at specified index in linked list", () => {
    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.addLast(3);
    linkedList.remove(1);
    expect(linkedList.toArray()).toEqual([1, 3]);
  });

  test("should throw an error when removing at an invalid index", () => {
    expect(() => linkedList.remove(-1)).toThrow("Invalid Index");
  });
});

describe("Access & Mutation", () => {
  test("should get the element at specified index", () => {
    linkedList.addLast(1);
    expect(linkedList.get(0).val).toBe(1);
  });

  test("should throw an error when getting elemetn at an invalid index", () => {
    expect(() => linkedList.get(-1)).toThrow("Invalid Index");
  });

  test("should set the element at the specified index", () => {
    linkedList.addLast(1);
    linkedList.set(0, 2);
    expect(linkedList.get(0).val).toBe(2);
  });

  test("should throw an error when setting element at invalid index", () => {
    expect(() => linkedList.set(-1, 0)).toThrow("Invalid Index");
  });
});

describe("Utility", () => {
  test("should convert linked list values to an array", () => {
    linkedList.addLast(1);
    expect(linkedList.toArray()).toEqual([1]);
  });

  test("should return true when linked list is empty", () => {
    expect(linkedList.isEmpty()).toBe(true);
  });

  test("should return false when linked list is not empty", () => {
    linkedList.addLast(1);
    expect(linkedList.isEmpty()).toBe(false);
  });

  test("should return the correct size of linked list", () => {
    linkedList.addFirst(1);
    linkedList.addLast(2);
    linkedList.add(2, 3);
    linkedList.removeFirst();
    linkedList.removeLast();
    linkedList.remove(0);
    expect(linkedList.size).toBe(0);
  });
});
