import { Tree } from "./binarySearchTree";

const testTree = new Tree();

describe("Binary Search Tree", () => {
  it("buildTree", () => {
    testTree.buildTree([4, 2, 8, 2, 8, 3, 1]);
  });
});