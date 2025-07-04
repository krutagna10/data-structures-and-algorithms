import { test, expect, beforeEach, describe } from "@jest/globals";
import BinarySearchTree from "./binary-search-tree";
import breadthFirstSearch from "../../../algorithms/tree/bfs/bfs";

let bst: BinarySearchTree<number>;
beforeEach(() => {
  bst = new BinarySearchTree();
});

test("should insert value in binary search tree", () => {
  bst.insert(2);
  bst.insert(1);
  bst.insert(3);
  expect(breadthFirstSearch(bst.root)).toEqual([[2], [1, 3]]);
});

test("should delete the node in binary search tree", () => {
  bst.insert(2);
  bst.insert(1);
  bst.insert(3);
  bst.delete(2);
  expect(breadthFirstSearch(bst.root)).toEqual([[3], [1]]);
})

test("should return true when value is present in binary search tree", () => {
  bst.insert(1);
  expect(bst.includes(1)).toBe(true);
});

test("should return false when value is not present in binary search tree", () => {
  expect(bst.includes(1)).toBe(false);
})
