import { test, expect, beforeEach } from "@jest/globals";
import MaxHeap from "../max-heap";

let heap = new MaxHeap<number>();
beforeEach(() => {
  heap = new MaxHeap<number>();
});

test("should insert value in heap", () => {
  heap.insert(1);
  heap.insert(2);
  heap.insert(3);
  heap.insert(0);
  expect(heap.values).toEqual([3, 1, 2, 0]);
});

test("should delete single value in a heap", () => {
  heap.insert(1);
  heap.delete();
  expect(heap.values).toEqual([]);
});

test("should delete multiple value in heap", () => {
  heap.insert(1);
  heap.insert(2);
  heap.insert(3);
  heap.insert(0);
  heap.delete();
  heap.delete();
  expect(heap.values).toEqual([1, 0])
});
