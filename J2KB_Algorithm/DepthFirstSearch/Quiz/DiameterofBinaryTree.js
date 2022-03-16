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
 * @return {number}
 */

//트리 길이 구하는 문제
//다 돌아야 하므로 DepthFirstSearch
class Node {
  data;
  left;
  right;
  constructor(data, left, right) {
    this.data = data;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}

const tree = new Node(1, new Node(2, new Node(4, null, null), new Node(5, null, null)), 3);
// console.log(tree);

let diameterOfBinaryTree = function (root) {
  let diameter = 0;

  dfs(root);
  return diameter;

  function dfs(node) {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    //update diameter : 결국 이 문제, 총길이는 이 diameter를 node 마다 계속 값을 update 하면
    //Math.max 함수에 의해 가장 큰 값이 최종적으로 남는다. 그걸 return 해주면 답이다.
    diameter = Math.max(diameter, left + right);

    //좌, 우 아들 노드의 return 값(:아래설명) 중 최대값 +1
    // return값 이란? dfs()의 return 값인데, 좌우 아들이 없는 leafnode라도 위에 부모 node와
    // 자기 node의 길이 1은 부모node를 위해 return 해줘야 하니 +1를 하는 이유이다.
    return 1 + Math.max(left, right);
  }
};

console.log(diameterOfBinaryTree(tree));
