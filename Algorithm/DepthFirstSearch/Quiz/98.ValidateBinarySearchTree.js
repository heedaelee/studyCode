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
  // val;
  // left;
  // right;
  constructor(val, left, right) {
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}

// const root = new Node(2, new Node(1, null, null), new Node(3, null, null));
//true

// const root = new Node(
//   5,
//   new Node(1, null, null),
//   new Node(4, new Node(3, null, null), new Node(6, null, null))
// );
//false

// const root = new Node(1, new Node(1, null, null));
//false

//[32,26,47,19,null,null,56,null,27]
// const root = new Node(
//   32,
//   new Node(26, new Node(19, null, new Node(27, null, null)), null),
//   new Node(47, null, new Node(56, null, null))
// );
//false

//[3,null,30,10,null,null,15,null,45]
// const root = new Node(
//   3,
//   null,
//   new Node(30, new Node(10, null, new Node(15, null, new Node(45, null, null))))
// );
// // false

// [5,4,6,null,null,3,7]
const root = new Node(
  5,
  new Node(4, null, null),
  new Node(6, new Node(3, null, null), new Node(7, null, null))
);

// console.log(root.left);

function isValidBST(root) {
  if (!root) {
    return true;
  }

  return dfsForValidBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

/**핵심 포인트 : 트리에서 좌측으로 내려가면 최대값이 변하고, 우측으로 내려가면 최소값이 변한다.  */
function dfsForValidBST(node, min, max) {
  // base case for recursion. return false if current node does not adhere to min and max
  if (node.val <= min || node.val >= max) {
    return false;
  }

  //left 자식 노드가 있다면, dfs(node.left)로 자식노드를 넣어주고, 
  //트리에서 왼쪽으로 내려 가면 최대값이 변해야 하므로, 현 node.val을 max param에 넣어줘 최대값을 부모노드 값으로 변화시킨다.    
  if (node.left) {
    const isLeftValidBST = dfsForValidBST(node.left, min, node.val);
    if (!isLeftValidBST) {
      return false;
    }
  }

  //right 자식 노드가 있다면, dfs(node.right)로 자식노드를 넣어주고, 
  //트리에서 오른쪽으로 내려 가면 최소값이 변해야 하므로, 현 node.val을 min param에 넣어줘 최소값을 부모노드 값으로 변화시킨다.
  if (node.right) {
    const isRightValidBST = dfsForValidBST(node.right, node.val, max);
    if (!isRightValidBST) {
      return false;
    }
  }

  return true;
}

console.log(isValidBST(root));

