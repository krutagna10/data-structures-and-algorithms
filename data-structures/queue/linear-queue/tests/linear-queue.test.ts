import { test, expect, beforeEach, describe } from "@jest/globals";
import Queue from "../src/linear-queue";

let queue: Queue<number>;
beforeEach(() => {
  queue = new Queue<number>();
});

describe("Insertion", () => {
  test("should add element at end of the queue", () => {
    queue.enqueue(1);
    expect(queue.toArray()).toEqual([1]);
  });
});

describe("Removal", () => {
  test("should remove element from start of the queue", () => {
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
  });

  test("should throw an error when trying remove element from empty queue", () => {
    expect(() => queue.dequeue()).toThrow("Queue Underflow");
  });
});

describe("Retrieval", () => {
  test("should retrieve element from start of the queue", () => {
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
  });

  test("should throw an error when trying to retrieve element from empty queue", () => {
    expect(() => queue.peek()).toThrow("Queue Empty");
  });
});

describe("Utility", () => {
  test("should return true when the queue is empty", () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test("should return false when the queue is not empty", () => {
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });

  test("should return correct size of the queue", () => {
    queue.enqueue(1);
    queue.dequeue();
    expect(queue.size).toBe(0);
  });

  test("should clear the queue", () => {
    queue.enqueue(1);
    queue.clear();
    expect(queue.isEmpty()).toBe(true);
  });
});
