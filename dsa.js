// Given a binary tree, find its height. in javascript

// To find the height of a binary tree in JavaScript, you can use a recursive approach. The height of a binary tree is the maximum depth, i.e., the maximum number of nodes from the root node to any leaf node.

// Example usage:
// Create a binary tree:
//       1
//      / \
//     2   3
//    / \
//   4   5

class TreeNode{
    constructor(val, left = null, right = null){
        this.val = val
        this.left = left
        this.right = right
    }
}
function getHeight(rootNode) {
    if (rootNode === null) {
        return 0;
      }
    const leftHeight = getHeight(rootNode.left)
    const rightHeight = getHeight(rootNode.right)
    return (1+Math.max(leftHeight, rightHeight))
}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const height = getHeight(root);
console.log("Height of the binary tree:", height); // Output: 3