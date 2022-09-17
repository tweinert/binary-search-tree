import { Tree } from "./binarySearchTree.js";

function randomArray(size) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}

const tree = new Tree(randomArray(20));

console.log("isBalanced?: " + tree.isBalanced());

console.log("level order: " + tree.levelOrder());
console.log("inorder: " + tree.inorder());
console.log("preorder: " + tree.preorder());
console.log("postorder: " + tree.postorder());

tree.insert(125);
tree.insert(150);
tree.insert(175);
tree.insert(200);

console.log("isBalanced?: " + tree.isBalanced());

tree.rebalance();

console.log("isBalanced?: " + tree.isBalanced());

console.log("level order: " + tree.levelOrder());
console.log("inorder: " + tree.inorder());
console.log("preorder: " + tree.preorder());
console.log("postorder: " + tree.postorder());