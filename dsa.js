// // // Given a Binary Tree, convert it into its mirror.

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.right = null;
    }
  }
  
  function mirrorBinaryTree(root) {
    if (!root) {
      return null;
    }
  
    // Swap the left and right subtrees
    [root.left, root.right] = [root.right, root.left];
  
    // Recursively convert left and right subtrees
    mirrorBinaryTree(root.left);
    mirrorBinaryTree(root.right);
  
    return root;
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
  
  // Example usage:
  // Create a sample binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  // Print the original binary tree
  console.log("Original binary tree:");
  printBinaryTree(root);
  
  // Convert the binary tree to its mirror
  mirrorBinaryTree(root);
  
  // Print the mirrored binary tree
  console.log("\nMirrored binary tree:");
  printBinaryTree(root); // 1 3 2 5 4 
  