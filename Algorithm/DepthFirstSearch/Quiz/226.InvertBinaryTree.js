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
 * @return {TreeNode}
 */

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}

// const root = new Node(2, new Node(1, null, null), new Node(3, null, null));

//[4,2,7,1,3,6,9]
const root = new Node(
  4,
  new Node(2, new Node(1, null, null), new Node(3, null, null)),
  new Node(7, new Node(6, null, null), new Node(9, null, null))
);

//NOTE: 의사코드를 확실히 정리하고 풀어야 할듯!

var invertTree = function (root) {
  return dsf(root);

  function dsf(node) {
    if (!node) return null;

    const left = dsf(node.left);
    const right = dsf(node.right);

    node.left = right;
    node.right = left;

    return node;
  }
};

console.log(invertTree(root));
