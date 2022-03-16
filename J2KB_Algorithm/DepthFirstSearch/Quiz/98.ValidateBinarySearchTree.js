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
 * @return {boolean}
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

// const root = new Node(2, new Node(1, null, null), new Node(3, null, null));
// const root = new Node(
//   5,
//   new Node(1, null, null),
//   new Node(4, new Node(3, null, null), new Node(6, null, null))
// );

const root = new Node(1, new Node(1, null, null));

// console.log(root);

var isValidBST = function (root) {
  let answer = true;

  dsf(root);

  function dsf(node) {
    if (!node || !answer) return;

    if (node.left?.val >= node.val || node.right?.val <= node.val) {
      answer = false;
      return answer;
    }

    dsf(node.left);
    dsf(node.right);
  }
  return answer;
};

console.log(isValidBST(root));
