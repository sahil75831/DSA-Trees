// Given two binary trees, the task is to find if both of them are identical or not. 

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

// Example usage:
// Create 1 binary tree:
//       1
//      / \
//     2   3
//    / \
//   4   5

// Create 2 binary tree:
//       1
//      / \
//     2   3
//    / \
//   14   5
function areTreesIdentical(root1, root2){
    if(root1===null && root2===null) return true
    if((root1===null && root2!==null) || (root1!==null && root2===null)) return false
    if(root1.data !== root2.data) return false
    return (areTreesIdentical(root1.left, root2.left) && areTreesIdentical(root1.right, root2.right))
    
}

// Create the first binary tree
const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);

// Create the second binary tree
const root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.left = new Node(14);
root2.left.right = new Node(5);

const result = areTreesIdentical(root1, root2);
console.log(result); // Output: false