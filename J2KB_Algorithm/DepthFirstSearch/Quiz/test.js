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
// const root = new Node(
//   5,
//   new Node(4, null, null),
//   new Node(6, new Node(3, null, null), new Node(7, null, null))
// );

const root = new Node(2, new Node(1, null, null), new Node(3, null, null));
//true

console.log(root);
function isValidBST(root) {
  if (!root) return;

  return isValidBstDsf(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function isValidBstDsf(node, min, max) {
  if (min >= node.val || max <= node.val) return false;

  if (node.left) {
    const isLeftNodeBst = isValidBstDsf(node.left, min, node.val);
    if (!isLeftNodeBst) return false;
  }
  if (node.right) {
    const isRightNodeBst = isValidBstDsf(node.right, node.val, max);
    if (!isRightNodeBst) return false;
  }

  return true;
}

console.log(isValidBST(root));
