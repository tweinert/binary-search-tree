class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  // helper function to sort array
  sortArray(array) {
    return array.sort(function(a, b) {
      if(a === Infinity)
        return 1;
      else if(isNaN(a))
        return -1;
      else
        return a - b;
    });
  }

  // helper function to remove duplicates from a sorted array
  removeDuplicates(array) {
    return array.filter(function(item, pos, ary) {
      return !pos || item != ary[pos - 1];
    });
  }

  prettyPrint(node, prefix = '', isLeft = true) {
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  buildTree(array) {
    // clean array
    let sortedArray = this.sortArray(array);
    sortedArray = this.removeDuplicates(sortedArray);

    let length = sortedArray.length - 1;
    return this.arrayToBST(sortedArray, 0, length);
  }

  arrayToBST(arr, start, end) {
    if (start > end) {
      return null;
    }

    let mid = parseInt((start + end) / 2);
    let node = new Node(arr[mid]);

    node.left = this.arrayToBST(arr, start, mid - 1);
    node.right = this.arrayToBST(arr, mid + 1, end);
    return node;
  }
}