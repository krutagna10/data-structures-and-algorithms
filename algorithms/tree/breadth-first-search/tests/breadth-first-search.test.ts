import { test, expect } from "@jest/globals";
import BinarySearchTree from "../../../../data-structures/tree/binary-search.tree/src/binary-search-tree";
import breadthFirstSearch from "../src/breadth-first.search";

test("should print the values in breadth first search order", () => {
  const bst = new BinarySearchTree();
  bst.insert(2);
  bst.insert(1);
  bst.insert(3);
  expect(breadthFirstSearch(bst.root)).toEqual([2, 1, 3]);
});
