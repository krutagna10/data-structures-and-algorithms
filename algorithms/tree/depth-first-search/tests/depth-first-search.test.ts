import { test, expect, beforeEach } from "@jest/globals";
import BinarySearchTree from "../../../../data-structures/tree/binary-search.tree/src/binary-search-tree";
import preorderRecursive from "../src/pre-order/pre-order-recursive";
import preorderIterative from "../src/pre-order/pre-order-iterative";
import inorderRecursive from "../src/in-order/in-order-recursive";
import inorderIterative from "../src/in-order/in-order-iterative";
import postorderRecursive from "../src/post-order/post-order-recursive";
import postorderIterative from "../src/post-order/post-order-iterative";

let bst = new BinarySearchTree<number>();
beforeEach(() => {
  bst = new BinarySearchTree();
});

test("should return array of values in given traversal order", () => {
  bst.insert(2);
  bst.insert(1);
  bst.insert(3);
  expect(preorderRecursive(bst.root)).toEqual([2, 1, 3]);
  expect(preorderIterative(bst.root)).toEqual([2, 1, 3]);
  expect(inorderRecursive(bst.root)).toEqual([1, 2, 3]);
  expect(inorderRecursive(bst.root)).toEqual([1, 2, 3]);
  expect(postorderRecursive(bst.root)).toEqual([1, 3, 2]);
  expect(postorderIterative(bst.root)).toEqual([1, 3, 2]);
});

test("should return empty array when the root is null", () => {
  expect(preorderRecursive(bst.root)).toEqual([]);
  expect(preorderIterative(bst.root)).toEqual([]);
  expect(inorderRecursive(bst.root)).toEqual([]);
  expect(inorderIterative(bst.root)).toEqual([]);
  expect(postorderRecursive(bst.root)).toEqual([]);
  expect(postorderIterative(bst.root)).toEqual([]);
});
