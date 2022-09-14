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
    expect(testTree.find(8)).toBeInstanceOf(Node);
  });

  it("find(), null", () => {
    expect(testTree.find(24)).toBe(null);
  });

  it("levelOrder()", () => {
    expect(testTree.levelOrder()).toEqual([8, 4, 67, 1, 5, 23, 324, 3, 7, 10, 6345]);
  });

  // it("levelOrder(), func arg", () => {
  //   const printData = function(node) {
  //     console.log(node.data);
  //   };
  //   console.log(testTree.levelOrder(printData));
  // });

  it("inorder()", () => {
    expect(testTree.inorder()).toEqual([1, 3, 4, 5, 7, 8, 10, 23, 67, 324, 6345]);
  });

  it("preorder()", () => {
    expect(testTree.preorder()).toEqual([8, 4, 1, 3, 5, 7, 67, 23, 10, 324, 6345]);
  });

  it("postorder()", () => {
    expect(testTree.postorder()).toEqual([3, 1, 7, 5, 4, 10, 23, 6345, 324, 67, 8]);
  });
});