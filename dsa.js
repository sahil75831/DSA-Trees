class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
function balancedTree(root) {
    if(root===null) return true
  function getHeight(root) {
    if (root === null) return 0;
    return (1 + Math.max(getHeight(root.left), getHeight(root.right)));
  }
  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  if(Math.abs(leftHeight - rightHeight) > 1) return false
  return (balancedTree(root.left) && balancedTree(root.right))
}
// Example usage:
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);


console.log(balancedTree(tree)); // Output: true