import { test, expect, beforeEach } from "@jest/globals";
import MaxHeap from "../max-heap";

let heap = new MaxHeap<number>();
beforeEach(() => {
  heap = new MaxHeap<number>();
});

test("should insert value in heap", () => {
  heap.add(1);
  heap.add(2);
  heap.add(3);
  heap.add(0);
  expect(heap.values).toEqual([3, 1, 2, 0]);
});

test("should delete single value in a heap", () => {
  heap.add(1);
  heap.remove();
  expect(heap.values).toEqual([]);
});

test("should delete multiple value in heap", () => {
  heap.add(1);
  heap.add(2);
  heap.add(3);
  heap.add(0);
  heap.remove();
  heap.remove();
  expect(heap.values).toEqual([1, 0]);
});
