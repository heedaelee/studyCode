/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

let root = [1, 2, 3, 4, 5];
var diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  let result = -1;
  let getH = function (node, h) {
    if (!node) return 0;
    let lh = getH(node.left);
    let rh = getH(node.right);
    result = Math.max(result, 1 + lh + rh);
    return 1 + Math.max(lh, rh);
  };
  getH(root);
  return result - 1;
};

console.log(diameterOfBinaryTree(root));
