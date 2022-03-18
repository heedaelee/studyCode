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

const root = new Node(2, new Node(1, null, null), new Node(3, null, null));
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
// const root = new Node(
//   5,
//   new Node(4, null, null),
//   new Node(6, new Node(3, null, null), new Node(7, null, null))
// );
//false

var isValidBST = function (root) {
  let answer = true;
  let rootVal = root.val;
  //BUG:이런 문제에서 max,min을 전역으로 정의해버리면 안됨, 함수 파라미터로 넣어줘야 한다. 왜냐하면, 
  //      트리에서 -> 리프트리까지 한번 동작에서 max, min값이 사용된 값이 전역변수로 공유 되버리면 트리가 만약 레프트에서 루트로 올라오고 라이트로 내려갈때 
  //      min max 값을 left때 값으로 공유해버린다, 만약 파라미터로 넣어주면 right로 넘어갈때 left 자식 node 함수 콜때 값이 아니라 루트 노드의 min
  //      max 값을 갖고 right로 가기 떔에 정상 작동한다. 즉 min, max값은  전역 X -> 파라미터 O
  // let max = Number.MAX_SAFE_INTEGER;
  // let min = Number.MIN_SAFE_INTEGER;


  return dsf(root);

  // fail code

  //   function dsf(node) {
  //     if (!node || !answer) return;

  //     if (node.left?.val >= max || node.right?.val <= min) {
  //       answer = false;
  //       return answer;
  //     }

  //     if (node.val < rootVal) {
  //       max = rootVal;
  //     } else {
  //       max = node.val;
  //     }
  //     dsf(node.left);
  //     if (node.val > rootVal) {
  //       min = rootVal;
  //     } else {
  //       min = node.val;
  //     }
  //     dsf(node.right);
  //   }
  //   return answer;
  // };
                      
};

console.log(isValidBST(root));
