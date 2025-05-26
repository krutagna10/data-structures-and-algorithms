import { test, expect, beforeEach, describe } from "@jest/globals";
import SinglyLinkedList from "../src/singly-linked-list";

let linkedList: SinglyLinkedList<number>;
beforeEach(() => {
  linkedList = new SinglyLinkedList();
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

  test("should add element at the specified index in linked list", () => {
    linkedList.add(0, 1);
    linkedList.add(1, 3);
    linkedList.add(1, 2);
    expect(linkedList.toArray()).toEqual([1, 2, 3]);
  });
});

describe("Removal", () => {
  test("should remove the first element from linked list", () => {
    linkedList.addFirst(1);
    expect(linkedList.removeFirst()).toBe(1);
  });

  test("should remove the last element from linked list", () => {
    linkedList.addLast(1);
    expect(linkedList.removeLast()).toBe(1);
  });

  test("should throw an error when removing element from empty linked list", () => {
    expect(() => linkedList.removeFirst()).toThrow("Linked List Underflow");
    expect(() => linkedList.removeLast()).toThrow("Linked List Underflow");
  });

  test("should remove element at the specified index in linked list", () => {
    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.addLast(3);
    expect(linkedList.remove(1)).toBe(2);
  });

  test("should throw an errow an error when removing element at invalid index", () => {
    expect(() => linkedList.remove(-1)).toThrow("Invalid Index");
  });
});

describe("Access & Mutation", () => {
  test("should get the element at the specified index", () => {
    linkedList.addLast(1);
    expect(linkedList.get(0).val).toBe(1);
  });

  test("should throw an error when getting element at an invalid index", () => {
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

  test("should reverse the linked list", () => {
    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.reverse();
    expect(linkedList.toArray()).toEqual([2, 1]);
  });
});

describe("Search", () => {
  test("should return true when element is present in the linked list", () => {
    linkedList.addLast(1);
    linkedList.addLast(2);
    expect(linkedList.includes(2)).toBe(true);
  });

  test("should return false when element is not present in the linked list", () => {
    expect(linkedList.includes(1)).toBe(false);
  });

  test("should return the index of element if it is present in the linked list", () => {
    linkedList.addLast(1);
    expect(linkedList.indexOf(1)).toBe(0);
  });

  test("should return -1 if the element is not present in the linked list", () => {
    expect(linkedList.indexOf(1)).toBe(-1);
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

  test("should return the correct size of the linked list", () => {
    linkedList.addFirst(1);
    linkedList.addLast(2);
    linkedList.add(2, 3);
    linkedList.removeFirst();
    linkedList.removeLast();
    linkedList.remove(0);
    expect(linkedList.size).toBe(0);
  });

  test("should clear the linked list", () => {
    linkedList.addLast(1);
    linkedList.clear();
    expect(linkedList.isEmpty()).toBe(true);
  });
});
