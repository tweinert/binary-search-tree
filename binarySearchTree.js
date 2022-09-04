class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(array) {
    this.root = null;
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

  buildTree(array) {
    // clean array
    let sortedArray = this.sortArray(array);
    sortedArray = this.removeDuplicates(sortedArray);

    
  }
}