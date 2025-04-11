import { test, expect } from "@jest/globals";
import SinglyLinkedList from "../src/single-linked-list";

test("should add element at the start of linked list", () => {
  const linkedList = new SinglyLinkedList<number>();
  linkedList.addFirst(1);
  linkedList.addFirst(2);
  expect(linkedList.toArray()).toEqual([2, 1]);
});

test("should add element at the end of linked list", () => {
  const linkedList = new SinglyLinkedList<number>();
  linkedList.addLast(1);
  linkedList.addLast(2);
  expect(linkedList.toArray()).toEqual([1, 2]);
});

test("should display the correct size of the linked list", () => {
  const linkedList = new SinglyLinkedList<number>();
  linkedList.addFirst(1);
  expect(linkedList.getSize()).toBe(1);
})

// test("should add element at a specified index in linked list", () => {
  
// })

