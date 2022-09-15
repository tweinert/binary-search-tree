export class Node {
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

  // inserts a node with given value
  insert(data) {
    this.root = this.insertRec(this.root, data);
  }

  insertRec(root, data) {
    // base case
    if (root == null) {
      root = new Node(data);
      return root;
    }

    if (data < root.data)
      root.left = this.insertRec(root.left, data);
    else if (data > root.data)
      root.right = this.insertRec(root.right, data);
    
    return root;
  }

  // delete node with given value
  delete(data) {
    this.root = this.deleteRec(this.root, data);
  }

  deleteRec(root, data) {
    // base case
    if (root == null) {
      return root;
    }

    if (data < root.data)
      root.left = this.deleteRec(root.left, data);
    else if (data > root.data)
      root.right = this.deleteRec(root.right, data);
    
    // if data is same as root's data,
    // delete this node
    else {
      // node with only one child or no child
      if (root.left == null)
        return root.right;
      else if (root.right == null)
        return root.left;

        // node wtih two children:
        // get the inorder successor (smallest in right subtree)
        root.data = minValue(root.right);

        // delete the inorder successor
        root.right = deleteRec(root.right, root.data);
    }

    return root;
  }

  // returns the inorder successor
  minValue(root) {
    let minV = root.data;
    while (root.left != null) {
      minV = root.left.key;
      root = root.left;
    }
    return minV;
  }

  find(data, root = this.root) {
    // base case
    if (root == null) return null;

    if (root.data == data) return root;
    
    if (root.data < data) {
      return this.find(data, root.right);
    } else if (root.data > data) {
      // if value is smaller than root's value
      return this.find(data, root.left);
    }
  }

  levelOrder(func = null, root = this.root) {
    // traverse tree in breadth-first level order
    // each node as argument to provided function
    // return array of values if no function given
    // use array acting as queue to keep track of child nodes yet to traverse
    if (root == null)
      return;
    const queue = [];
    let outputArr = [];
    queue.push(root);

    while(queue.length > 0) {
      let current = queue[0];
      queue.shift();
      // if func, node as argument to func
      // if no func, return array of values
      if (func == null) {
        outputArr.push(current.data);
      } else {
        func(current);
      }

      if (current.left != null) queue.push(current.left);
      if (current.right != null) queue.push(current.right);
    }

    if (outputArr.length > 0)
      return outputArr;
  }

  inorder(func = null, node = this.root) {
    // left, root, right
    if (node == null)
      return;
    
    let outputArr = [];
    
    outputArr = this.inorderRec(func, node, outputArr);

    if (outputArr.length > 0)
      return outputArr;
  }

  inorderRec(func, node, arr) {
    if (node == null) 
      return;
    
    // left
    this.inorderRec(func, node.left, arr);

    // function or add to outputArr
    if (func == null) {
      arr.push(node.data);
    } else {
      func(node);
    }

    this.inorderRec(func, node.right, arr);

    return arr;
  }

  preorder(func = null, node = this.root) {
    // root, left, right
    if (node == null)
      return;

    let outputArr = [];

    outputArr = this.preorderRec(func, node, outputArr);

    if (outputArr.length > 0)
      return outputArr;
  }

  preorderRec(func, node, arr) {
    if (node == null)
      return;
    
    if (func == null) {
      arr.push(node.data);
    } else {
      func(node);
    }

    this.preorderRec(func, node.left, arr);

    this.preorderRec(func, node.right, arr);

    return arr;
  }

  postorder(func = null, node = this.root) {
    // left, right, root
    if (node == null) 
      return;
    
    let outputArr = [];

    outputArr = this.postorderRec(func, node, outputArr);

    if (outputArr.length > 0) 
      return outputArr;
  }

  postorderRec(func, node, arr) {
    if (node == null)
      return;

    this.postorderRec(func, node.left, arr);

    this.postorderRec(func, node.right, arr);

    if (func == null) {
      arr.push(node.data);
    } else {
      func(node);
    }

    return arr;
  }

  height(node) {
    // go down from node and find how far deepest node is from it

    if (node == null) {
      return -1;
    }

    let left = this.height(node.left);
    let right = this.height(node.right);

    return Math.max(left, right) + 1;
  }
}