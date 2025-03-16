import { test, expect } from "@jest/globals";
import SinglyLinkedList from "../src/singly-linked-list";

test("should add element at the start of linked list", () => {
  const linkedList = new SinglyLinkedList<number>();
  linkedList.addFirst(10);
  linkedList.addFirst(20);
  expect(linkedList.toArray()).toEqual([20, 10]);
});

test("should add element at the end of linked list", () => {
  const linkedList = new SinglyLinkedList<number>();
  linkedList.addLast(10);
  linkedList.addLast(20);
  expect(linkedList.toArray()).toEqual([10, 20]);
});

test("should add element at a specified index in linked list", () => {
  
})

