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

//테스트를 위해 p,q를 root에서 해당 노드에 reference를 이렇게 갖고와서 사용 해야 한다.
let p = root.left;
let q = root.right;

// console.log(root.left);
function lowestCommonAncestor(node, p, q) {
  if (!node || node === p || node === q) {
    return node;
  }
  let resL = lowestCommonAncestor(node.left, p, q);
  let resR = lowestCommonAncestor(node.right, p, q);
  //L,R 자식 중 둘다 있으면  자신 리턴, 둘다 없으면 있는 자식 부분 node 리턴
  return resL && resR ? node : resL || resR;
}

console.log(lowestCommonAncestor(root, root.left, root.right));
