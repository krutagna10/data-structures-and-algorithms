import { test, expect, beforeEach } from "@jest/globals";
import BinarySearchTree from "../../../../../data-structures/tree/binary-search.tree/src/binary-search-tree";
import inorderRecursive from "../src/in-order-recursive";
import inorderIterative from "../src/in-order-iterative";

let bst: BinarySearchTree<number>;
beforeEach(() => {
  bst = new BinarySearchTree();
});

test("should return an array of values in inorder traversal order", () => {
  bst.insert(2);
  bst.insert(1);
  bst.insert(3);
  expect(inorderRecursive(bst.root)).toEqual([1, 2, 3]);
  expect(inorderIterative(bst.root)).toEqual([1, 2, 3]);
});

test("should return empty array when the root is null", () => {
  expect(inorderRecursive(bst.root)).toEqual([]);
  expect(inorderIterative(bst.root)).toEqual([]);
});
