import { test, expect, beforeEach, describe } from "@jest/globals";
import Stack from "../src/stack";

let stack: Stack<number>;
beforeEach(() => {
  stack = new Stack<number>();
});

describe("Insertion", () => {
  test("should add value at top of the stack", () => {
    stack.push(1);
    expect(stack.toArray()).toEqual([1]);
  });
});

describe("Removal", () => {
  test("should remove value from top of the stack", () => {
    stack.push(1);
    expect(stack.pop()).toBe(1);
  });

  test("should throw an error when trying to remove elements from empty stack", () => {
    expect(() => stack.pop()).toThrow("Stack Underflow");
  });
});

describe("Retrieval", () => {
  test("should retrieve value from top of the stack", () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  test("should throw an error when trying to retrieve value from empty stack", () => {
    expect(() => stack.peek()).toThrow("Stack Empty");
  });
});

describe("Utility", () => {
  test("should return true when the stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test("should return false when the stack is not empty", () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test("should return correct size of the stack", () => {
    stack.push(1);
    stack.pop();
    expect(stack.size).toBe(0);
  })

  test("should clear the stack", () => {
    stack.push(1);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
  })
});
