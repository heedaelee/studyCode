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

/**
 * 트리의 지름 계산하는 문제
 * point : 높이가 아니라 지름이므로, root를 지나치지 않는 node A, B의 길이도 해당된다. 오류 나기 쉬움
 * left랑 right 비교해서 최대값을 return 해주는 식으로 자식노드의 최대값을 얻는다.
 * 트리의 left right의 합 중 최대값이 최대 지름.
 * */

var diameterOfBinaryTree = function (root) {
  let mostMax = 0;
  // = 지름, DFS가 계속 돌아도 최대값 계산이 되도록 전역에 정의 해준다.

  function DFS(node) {
    if (!node) return 0;

    const left = DFS(node.left);
    const right = DFS(node.right);

    mostMax = Math.max(mostMax, left + right);

    return Math.max(left, right) + 1;
  }

  DFS(root);

  return mostMax;
};
