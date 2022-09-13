import { Node, Tree } from "./binarySearchTree";

const testTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 67, 6345, 324]);
testTree.prettyPrint(testTree.root);

describe("Binary Search Tree", () => {
  it("insert()", () => {
    testTree.insert(10);
    testTree.prettyPrint(testTree.root);
  });

  it("delete()", () => {
    testTree.delete(9);
    testTree.prettyPrint(testTree.root);
  });

  it("find()", () => {
    console.log("find: " + testTree.find(8));
    expect(testTree.find(8)).toBeInstanceOf(Node);
  });

  it("find(), null", () => {
    expect(testTree.find(24)).toBe(null);
  });

  it("levelOrder()", () => {
    testTree.levelOrder();
  })
});