/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

class Node {
  val;
  left;
  right;
  constructor(val, left, right) {
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}

const root = new Node(
  10,
  new Node(5, new Node(3, null, null), new Node(7, null, null)),
  new Node(15, null, new Node(18, null, null))
);

// console.log(root);

var rangeSumBST = function (root, low, high) {
  let sum = 0;

  dfs(root);

  function dfs(node) {
    if (!node) return 0;

    if (node.val > low) {
      dfs(node.left);
    }
    if (node.val < high) {
      dfs(node.right);
    }
    if (node.val >= low && node.val <= high) sum += node.val;

    return node.val;
  }

  return sum;
};

let low = 7;
let high = 15;
console.log(rangeSumBST(root, low, high));
