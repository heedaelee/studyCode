/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 
 */
class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}

//[3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1

const root = new Node(
  3,
  new Node(
    5,
    new Node(6, null, null),
    new Node(2, new Node(7, null, null), new Node(4, null, null))
  ),
  new Node(1, new Node(0, null, null), new Node(8, null, null))
);
let p = 5,
  q = 1;

//key : value 구조로 노드의 값을 key, 노드의 레벨을 value
//그런데 그게 p에서 q까지 거리에 값 중에. p나 q를 만나면 start, q나 p를 만나면 stop
var lowestCommonAncestor = function (root, p, q) {
  let depts = 0;
  let set = new Set([p, q]);
  dfs(root, 0);

  function dfs(node) {
    if (!node) return null;
    depts = depts + 1;
    console.log(node.val, depts);

    dfs(node.left);
    dfs(node.right);
    
    return -1;
  }
};

lowestCommonAncestor(root, p, q);
