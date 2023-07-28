// To check whether a binary tree is symmetric or not, you need to compare the left and right subtrees of the root to see if they are mirror images of each other. If they are, then the binary tree is symmetric.

// Here's a JavaScript function that checks if a binary tree is symmetric:


class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function isSymmetric(root) {
  if (root === null) return true;
  function isMirror(left, right) {
    if (left===null && right===null) return true;
    if (left.val !== right.val) return false;
    else  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }
  return isMirror(root.left, root.right);
}

// Helper function to print the binary tree (for visualization)
function printBinaryTree(root) {
  if (!root) {
    return;
  }

  console.log(root.val);
  printBinaryTree(root.left);
  printBinaryTree(root.right);
}
// Example binary tree:
//       1
//      / \
//     2   2
//    / \ / \
//   3  4 4  3
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

// Print the original binary tree
console.log("Original binary tree:");
printBinaryTree(root);


const result = isSymmetric(root);
console.log("result : ", result);
