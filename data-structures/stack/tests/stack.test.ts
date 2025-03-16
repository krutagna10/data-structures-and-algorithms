import { test, expect } from "@jest/globals";
import Stack from "../src/stack";

test("should push elements to stack", () => {
  const stack = new Stack<number>();
  stack.push(10);
  stack.push(20);
  expect(stack.toArray()).toEqual([20, 10]);
});

test("should pop elements from stack", () => {
  const stack = new Stack<number>();
  stack.push(10);
  stack.push(20);
  stack.pop();
  expect(stack.toArray()).toEqual([10]);
});

test("should throw an error when popping elements from empty stack", () => {
  const stack = new Stack<number>();
  expect(() => stack.pop()).toThrow(Error);
});

test("should peek element from stack", () => {
  const stack = new Stack<number>();
  stack.push(10);
  stack.push(20);
  expect(stack.peek()).toEqual(20);
});

test("should throw an error when peeking elements from empty stack", () => {
  const stack = new Stack<number>();
  expect(() => stack.peek()).toThrow(Error);
});

test("should check whether the stack is empty", () => {
  const stack = new Stack<number>();
  expect(stack.isEmpty()).toBe(true);
  stack.push(10);
  expect(stack.isEmpty()).toBe(false);
});

test("should return the size of stack", () => {
  const stack = new Stack<number>();
  stack.push(10);
  stack.push(20);
  expect(stack.size()).toBe(2);
});

test("should return 0 when the checking size of empty stack", () => {
  const stack = new Stack();
  expect(stack.size()).toBe(0);
});
