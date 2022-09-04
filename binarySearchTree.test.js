import { Tree } from "./binarySearchTree";

const testTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

describe("Binary Search Tree", () => {
  it("buildTree", () => {
    console.log(testTree.root);
    testTree.prettyPrint(testTree.root);
  });
});