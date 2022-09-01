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

//key : value 구조로 노드의 값을 vale, 노드의 레벨을 key
//그런데 그게 p에서 q까지 거리에 값 중에. p나 q를 만나면 start, q나 p를 만나면 stop
var lowestCommonAncestor = function (root, p, q) {
  let depts = 0;
  let set = new Set([p, q]);
  let map = new Map();
  let startFlag = false;
  dfs(root, 0);

  function dfs(node) {
    if (!node) return null;

    // console.log(node.val, depts);
    console.log("노드 벨류, start ", node.val, startFlag);
    if (startFlag) map.set(depts, node.val);
    if (set.has(node.val) && startFlag) {
      // console.log('종료 노드 : ', node.val);
      startFlag = false;
    }

    //왼쪽 노드가 있드면 depts 가 1깊어진다.
    if (node.left) depts += 1;
    dfs(node.left);

    //저장 스위치 온
    if (set.has(node.val) && !startFlag) {
      // console.log('시작 노드 : ', node.val);
      startFlag = true;
      map.set(depts, node.val);
    }
    //저장 시작

    //오른쪽 노드가 있드면 depts 가 1깊어진다.
    if (node.right) depts += 1;
    dfs(node.right);

    // 왼쪽 오른쪽 자식 노드를 다 지났으면 dept가 1 얕아진다.
    depts -= 1;

    return -1;
  }
  console.log(map);
};

lowestCommonAncestor(root, p, q);
