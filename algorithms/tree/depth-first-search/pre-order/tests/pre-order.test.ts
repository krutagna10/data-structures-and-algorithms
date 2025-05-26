import { test, expect, beforeEach } from "@jest/globals";
import BinarySearchTree from "../../../../../data-structures/tree/binary-search.tree/src/binary-search-tree";
import preorderRecursive from "../src/pre-order-recursive";
import preorderIterative from "../src/pre-order-iterative";

let bst = new BinarySearchTree<number>();
beforeEach(() => {
  bst = new BinarySearchTree();
});

test("should return array of values in preorder traversal order", () => {
  bst.insert(2);
  bst.insert(1);
  bst.insert(3);
  expect(preorderRecursive(bst.root)).toEqual([2, 1, 3]);
  expect(preorderIterative(bst.root)).toEqual([2, 1, 3]);
});

test("should return empty array when the root is null", () => {
  expect(preorderRecursive(bst.root)).toEqual([]);
  expect(preorderIterative(bst.root)).toEqual([]);
});
